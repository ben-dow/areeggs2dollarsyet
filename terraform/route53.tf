data "aws_route53_zone" "rootdns" {
  name = "areeggs2dollarsyet.com"
}

resource "aws_route53_record" "env_record" {
  name    = "${var.environment}.${data.aws_route53_zone.rootdns.name}"
  type    = "A"
  zone_id = data.aws_route53_zone.rootdns.zone_id
  alias {
    evaluate_target_health = true
    name                   = aws_s3_bucket.website_bucket.website_domain
    zone_id                = aws_s3_bucket.website_bucket.hosted_zone_id
  }
}