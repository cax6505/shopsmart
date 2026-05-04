variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "us-east-1"
}

variable "environment" {
  description = "Environment name (dev, staging, prod)"
  type        = string
  default     = "prod"
}

variable "s3_bucket_name" {
  description = "Unique name for the S3 bucket"
  type        = string
  validation {
    condition     = can(regex("^[a-z0-9-]*$", var.s3_bucket_name))
    error_message = "S3 bucket name must contain only lowercase letters, numbers, and hyphens."
  }
}

variable "ecr_repository_name" {
  description = "Name for the ECR repository"
  type        = string
  default     = "shopsmart-app"
}

variable "ecs_cluster_name" {
  description = "Name for the ECS cluster"
  type        = string
  default     = "shopsmart-cluster"
}

variable "ecs_task_cpu" {
  description = "CPU units for ECS task (256, 512, 1024, 2048, 4096)"
  type        = number
  default     = 512
}

variable "ecs_task_memory" {
  description = "Memory in MB for ECS task (512, 1024, 2048, 3072, 4096, 5120, 6144, 7168, 8192)"
  type        = number
  default     = 1024
}

variable "ecs_desired_count" {
  description = "Desired number of ECS tasks"
  type        = number
  default     = 2
}

variable "ecs_max_capacity" {
  description = "Maximum number of ECS tasks for auto-scaling"
  type        = number
  default     = 4
}

variable "container_image_tag" {
  description = "Docker image tag to deploy"
  type        = string
  default     = "latest"
}
