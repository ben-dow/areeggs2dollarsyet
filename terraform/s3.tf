resource "aws_s3_bucket" "website_bucket" {
  bucket = "areeggs2dollarsyet-${var.environment}"
}

resource "aws_s3_bucket_acl" "bucket-acl" {
  bucket = aws_s3_bucket.website_bucket.id
  acl = "public-read"
  depends_on = [aws_s3]
}

resource "aws_s3_bucket_website_configuration" "website" {
  bucket = aws_s3_bucket.website_bucket.id
  index_document {
    suffix = "index.html"
  }
  error_document {
    key = "index.html"
  }
}

resource "aws_s3_object" "dist" {
  for_each = fileset("../dist/", "**/*.*")
  bucket = aws_s3_bucket.website_bucket.id
  key = each.value
  source = "../dist/${each.value}"
  etag = filemd5("../dist/${each.value}")
}