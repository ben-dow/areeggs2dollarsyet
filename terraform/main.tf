terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "~>5.84"
    }
  }

  backend "s3" {
  }

  required_version = ">= 1.2.0"
}

provider "aws" {
  region = var.region
  default_tags {
    Application = "areeggs2dollarsyet"
    Environment = var.environment
  }
}
