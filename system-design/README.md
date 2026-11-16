# System Design Practice

System design is intended to be practiced regularly alongside the main curriculum. These are foundational concepts discussed in earlier sessions, not a claim that the complete system-design curriculum is finished.

## Concepts discussed

### Single instance and single point of failure

If an application only runs on one instance and that instance fails, the application may become unavailable. The instance is a single point of failure.

### Multiple instances

Running more than one instance can allow traffic to continue when one instance fails, provided a load balancer or routing layer can direct requests to healthy instances. The application must also handle state and dependencies correctly.

### Health checks

A health check provides a signal about whether an instance is healthy. It can help orchestration or load-balancing systems avoid sending traffic to an unhealthy instance.

### Secrets and configuration

Credentials should not be committed to Git. Development can use an ignored `.env` file; deployed services should use managed secrets or environment configuration.

### Deployment without user interruption

CI/CD automates the path from code changes to production. For low-interruption deployments, combine it with a release strategy such as rolling or blue-green deployment, compatible changes, health checks, and rollback planning.

## How to structure future design exercises

1. Clarify functional and non-functional requirements.
2. State assumptions and estimate scale where relevant.
3. Identify APIs and data model.
4. Draw components and request/data flow.
5. Analyze bottlenecks, failure modes, and dependencies.
6. Explain scaling, security, observability, and trade-offs.
7. Practice a concise verbal explanation.

## Future areas

- API and database design.
- Caching and invalidation.
- Queues and asynchronous processing.
- Real-time delivery with WebSockets or Server-Sent Events.
- Horizontal scaling and distributed state.
- Resilience, retries, timeouts, and idempotency.
- Observability and performance diagnosis.
