data "aws_route53_zone" "rootdns" {
  name = "areeggs2dollarsyet.com"
}

resource "aws_route53_record" "env_record" {
  name    = "${var.environment}.${data.aws_route53_zone.rootdns.name}"
  type    = "A"
  zone_id = data.aws_route53_zone.rootdns.zone_id
  alias {
    evaluate_target_health = true
    name                   = aws_cloudfront_distribution.website.domain_name
    zone_id                = aws_cloudfront_distribution.website.hosted_zone_id
  }
}

resource "aws_route53_record" "prod_record" {
  count = var.environment == "prod" ? 1 : 0
  name    = data.aws_route53_zone.rootdns.name
  type    = "A"
  zone_id = data.aws_route53_zone.rootdns.zone_id
  alias {
    evaluate_target_health = true
    name                   = aws_cloudfront_distribution.website.domain_name
    zone_id                = aws_cloudfront_distribution.website.hosted_zone_id
  }
}