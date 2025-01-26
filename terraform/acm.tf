resource "aws_acm_certificate" "cert" {
  provider = aws.us-east-1
  domain_name = "${var.environment}.areeggs2dollarsyet.com"
  validation_method = "DNS"
  lifecycle {
    create_before_destroy = true
  }
  subject_alternative_names = var.environment == "prod" ? ["areeggs2dollarsyet.com"] : []
}

resource "aws_route53_record" "acm_record" {
  for_each = {
    for dvo in aws_acm_certificate.cert.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  }

  allow_overwrite = true
  name            = each.value.name
  records         = [each.value.record]
  ttl             = 60
  type            = each.value.type
  zone_id         = data.aws_route53_zone.rootdns.zone_id
}

resource "aws_acm_certificate_validation" "example" {
  certificate_arn         = aws_acm_certificate.cert.arn
  validation_record_fqdns = [for record in aws_route53_record.acm_record : record.fqdn]
}

provider "aws" {
  alias      = "us-east-1"
  region     = "us-east-1"
}