provider "aws" {
  region = "ap-south-1"
}

# VPC
resource "aws_vpc" "nexmart_vpc" {
  cidr_block = "10.0.0.0/16"
  tags = {
    Name = "NexMart-VPC"
  }
}

# ECS Cluster
resource "aws_ecs_cluster" "nexmart_cluster" {
  name = "nexmart-cluster"
}

# RDS PostgreSQL
resource "aws_db_instance" "nexmart_db" {
  identifier        = "nexmart-db"
  engine            = "postgres"
  engine_version    = "15"
  instance_class    = "db.t3.micro"
  allocated_storage = 20
  username          = "dbadmin"
  password          = "placeholder_password"
  skip_final_snapshot = true
}

# ElastiCache Redis
resource "aws_elasticache_cluster" "nexmart_redis" {
  cluster_id           = "nexmart-redis"
  engine               = "redis"
  node_type            = "cache.t3.micro"
  num_cache_nodes      = 1
  parameter_group_name = "default.redis7"
  engine_version       = "7.0"
  port                 = 6379
}

# S3 Bucket for Media
resource "aws_s3_bucket" "nexmart_media" {
  bucket = "nexmart-media-assets"
}

# CloudFront Distribution
resource "aws_cloudfront_distribution" "s3_distribution" {
  origin {
    domain_name = aws_s3_bucket.nexmart_media.bucket_regional_domain_name
    origin_id   = "S3-nexmart-media"
  }
  enabled = true
  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "S3-nexmart-media"
    viewer_protocol_policy = "redirect-to-https"
    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }
  }
  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }
  viewer_certificate {
    cloudfront_default_certificate = true
  }
}

# SQS Queue
resource "aws_sqs_queue" "nexmart_orders_queue" {
  name = "nexmart-orders-queue"
}

# SNS Topic
resource "aws_sns_topic" "nexmart_notifications" {
  name = "nexmart-notifications"
}

# API Gateway
resource "aws_api_gateway_rest_api" "nexmart_api" {
  name = "nexmart-api"
}
