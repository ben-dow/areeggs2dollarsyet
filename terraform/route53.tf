terraform {
  required_providers {
    awscc = {
      source  = "hashicorp/awscc"
      version = "1.2.0"
    }
  }
}

data "aws_route53_zone" "rootdns" {
  name = "areeggs2dollarsyet.com"
}

resource "aws_route53_record" "env_record" {
  name    = "${var.environment}.${data.aws_route53_zone.rootdns.name}"
  type    = "A"
  zone_id = data.aws_route53_zone.rootdns.zone_id
}