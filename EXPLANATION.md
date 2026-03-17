# Project Explanation

## 1. Architecture
The **Shopsmart** project is split into a modular backend and frontend:
- **Frontend (Client):** Developed using React.js and scaffolded with Vite for an optimal developer experience and minimal final builds. It is a Single Page Application (SPA) designed to be highly responsive out of the box. 
- **Backend (Server):** Formulated utilizing Node.js and Express. It holds RESTful endpoints designed for business logic and ensuring isolated data integrations to preserve separation of concerns.

## 2. Workflow
The team follows an automated configuration strategy avoiding direct monolithic releases:
- **Continuous Integration (CI):** We leverage GitHub Actions. Our `.github/workflows/ci.yml` activates on branch pushes and Pull Requests, immediately handling dependency installations (`npm ci`), automated test validation (`npm run test`), and verifying formatting constraints and lint checks using Prettier and ESLint.
- **Continuous Deployment (CD):** Additional workflows outline seamless automated deployments (e.g. `deploy-ec2.yml`) meant to deploy the build cleanly to server structures via isolated SSH protocols, further preventing manual failure modes tracking tightly to commit tags.

## 3. Design Decisions
- **Modularity:** Our React structure isolates reusable UI concerns (`ProductCard`, `PromoBanner`, `Sidebar`) away from main page logic, drastically reducing spaghetti integrations and improving test coverage capability.
- **Testing Approach:**
  - *Unit:* Setup via `Vitest` and `React Testing Library` for rapid functional validation.
  - *Integration & End-to-End:* Established Playwright routines and mock API frameworks intercept functionality spanning between the client interfaces and API boundaries mapping accurate behavioral conditions.
- **Idempotency:** Operational side-effect scripting prioritizes non-destructive, repeatable architectures (e.g. `mkdir -p`, conditionals on rewrites) to limit dirty local and deployed states, allowing scripts to be arbitrarily run multiple times without causing a crash.

## 4. Challenges
- **Implementing Automated Testing Pipelines:** Initial hurdles involving correct Playwright container specifications required robust debugging on GitHub Runners and separating E2E, Integration, and Unit tests into cohesive workspace test routines.
- **Ensuring Cross-Platform Compatibility:** Writing idempotent scripts that will successfully manage configurations exactly the same way without resulting in missing node modules or failed server restarts whether run locally on Mac or within strict Ubuntu GitHub Actions VMs.
- **Dependency Reliability:** Establishing comprehensive automatic checks using `dependabot` guarantees moving off out-of-date or deprecated libraries reducing technical debt but requires correctly targeting `package-ecosystem: "npm"` securely in poly-repository shapes.
