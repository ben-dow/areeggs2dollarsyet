resource "aws_cloudfront_origin_access_control" "cf-s3-oac" {
  name                              = "${var.environment} areeggs2dollarsyet CF S3 OAC"
  description                       = "CloudFront S3 OAC"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

resource "aws_cloudfront_distribution" "website" {
  enabled = true
  default_root_object = "index.html"
  price_class = "PriceClass_100"

  origin {
    domain_name = aws_s3_bucket.website_bucket.bucket_regional_domain_name
    origin_id  = aws_s3_bucket.website_bucket.id
    origin_access_control_id = aws_cloudfront_origin_access_control.cf-s3-oac.id
  }

  aliases = ["${var.environment}.areeggs2dollarsyet.com", var.environment == "prod" ? "areeggs2daollarsyet.com" : null]

  default_cache_behavior {
    allowed_methods = ["GET", "HEAD"]
    cached_methods = ["GET", "HEAD"]
    target_origin_id       = aws_s3_bucket.website_bucket.id
    viewer_protocol_policy = "redirect-to-https"
    min_ttl = 0
    default_ttl = 3600
    max_ttl = 86400
    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }
  }
  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }
  viewer_certificate {
    acm_certificate_arn = aws_acm_certificate.cert.arn
    ssl_support_method = "sni-only"
  }
}

resource "null_resource" "invalidate_cache"{
  triggers = {
    updated = timestamp()
  }
  provisioner "local-exec" {
    command = "aws cloudfront create-invalidation --distribution-id ${aws_cloudfront_distribution.website.id} --paths \"/*\""
  }
}