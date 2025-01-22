resource "aws_s3_bucket_website_configuration" "website" {
  bucket = "areeggs2dollarsyet-${var.environment}"
  index_document {
    suffix = "index.html"
  }
  error_document {
    key = "index.html"
  }
}