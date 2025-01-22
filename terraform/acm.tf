resource "aws_acm_certificate" "cert" {
  provider = aws.us-east-1
  domain_name = "${var.environment}.areeggs2dollarsyet.com"
  validation_method = "DNS"
  lifecycle {
    create_before_destroy = true
  }
}

provider "aws" {
  alias      = "us-east-1"
  region     = "us-east-1"
}