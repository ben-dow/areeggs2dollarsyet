resource "aws_acm_certificate" "cert" {
  provider = aws.us-east-1
  domain_name = aws_route53_record.env_record.name
  validation_method = "DNS"
  lifecycle {
    create_before_destroy = true
  }
}

provider "aws" {
  alias      = "us-east-1"
  region     = "us-east-1"
}