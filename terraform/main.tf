terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "~>5.84"
    }
  }

  backend "s3" {
    bucket = var.state_bucket
    key    = "terraform/${var.environment}/${var.environment}"
    region = var.state_table
    dynamodb_table = var.state_table
  }

  required_version = ">= 1.2.0"
}

provider "aws" {
  region = var.region
}
