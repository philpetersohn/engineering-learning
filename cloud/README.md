# Cloud Engineering

Status: **Some foundations studied; further study planned**

## Concepts previously discussed

### Environment configuration and secrets
Keep API keys and database credentials out of source control. Use local environment configuration for development and managed secret/configuration facilities in deployed environments.

### Health checks
A health endpoint gives a platform or load balancer a signal about whether an application instance is healthy enough to receive traffic. A useful health check should reflect the dependencies required for the service to operate, without making the check so broad or fragile that it creates unnecessary failures.

### Multiple application instances
A single application instance can be a single point of failure. Running multiple instances can improve availability when traffic is distributed across healthy instances. Multiple instances alone are not enough: the system also needs suitable load balancing, shared or externalized state, and reliable health checks.

### CI/CD and deployments
A deployment pipeline can automate building, testing, and releasing software. Deployment strategies such as rolling or blue-green releases can reduce interruption, but a pipeline by itself does not guarantee a zero-downtime deployment. Application compatibility, database migrations, health checks, and rollback strategy also matter.

## Further study

- Cloud networking and identity.
- Compute, containers, and serverless.
- Managed databases and backups.
- Load balancing and autoscaling.
- Observability: metrics, logs, traces.
- Caching and CDN behavior.
- Deployment strategies and rollback.
- Reliability, availability, and cost trade-offs.
