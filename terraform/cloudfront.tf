/*
resource "aws_cloudfront_distribution" "website" {
  enabled = true
  price_class = "PriceClass_100"
  origin {
    domain_name = aws_s3_bucket.website_bucket.bucket_domain_name
    origin_id  = aws_s3_bucket.website_bucket.id
    custom_origin_config {
      http_port              = 80
      https_port             = 443
      origin_protocol_policy = "http-only"
      origin_ssl_protocols   = ["TLSv1.2"]
    }
  }
  is_ipv6_enabled = true
  default_root_object = "index.html"
  aliases = ["${var.environment}.areeggs2dollarsyet.com"]
  default_cache_behavior {
    allowed_methods = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods = ["GET", "HEAD"]
    target_origin_id       = aws_s3_bucket.website_bucket.id
    viewer_protocol_policy = "redirect-to-https"
    min_ttl = 0
    default_ttl = 3600
    max_ttl = 86400
    forwarded_values {
      query_string = true

      cookies {
        forward = "all"
      }
    }
  }
  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

}
 */