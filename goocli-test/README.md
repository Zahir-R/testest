# Menopause Support Chatbot

A full-stack web application designed to provide compassionate, clear, and accessible support to women navigating menopause.

## Tech Stack
- **Frontend:** Nuxt 3 (Vue.js) with Tailwind CSS (styled for accessibility: large fonts, clear contrast).
- **Backend:** FastAPI (Python) handling routing and business logic.
- **Authentication:** JWT-based securely managed by FastAPI.
- **Database:** PostgreSQL (Designed for AWS RDS).
- **Storage:** AWS S3 for profile images and resources.
- **Deployment:** AWS Amplify for the Frontend, CloudFront/API Gateway for Backend.

## Project Structure
- `/frontend`: The Nuxt 3 user interface.
- `/backend`: The FastAPI server.
- `amplify.yml`: Build instructions for AWS Amplify.

## Setup Instructions

### Backend (FastAPI)
1. Navigate to the backend directory: `cd backend`
2. Create a virtual environment: `python -m venv venv` and activate it: `source venv/bin/activate`
3. Install dependencies: `pip install -r requirements.txt`
4. Set the necessary environment variables:
   - `DATABASE_URL` (e.g., `postgresql://user:pass@localhost/db`)
   - `SECRET_KEY` (Your JWT secret)
   - `AWS_REGION` and `AWS_BUCKET_NAME`
5. Run the server locally: `uvicorn app.main:app --reload`

### Frontend (Nuxt 3)
1. Navigate to the frontend directory: `cd frontend`
2. Install dependencies: `npm install`
3. Set your local backend URL in `.env`: `API_BASE_URL=http://localhost:8000`
4. Run locally: `npm run dev`

## AWS Deployment Configuration

### 1. Database (AWS RDS PostgreSQL)
- Provision a PostgreSQL instance using Amazon RDS.
- Ensure the Security Group allows inbound traffic on port 5432 from your backend environment.
- Use the connection string as your `DATABASE_URL` in the backend environment variables.

### 2. Storage (AWS S3)
- Create an S3 bucket (e.g., `menopause-app-storage`).
- Enable CORS if needed for direct browser uploads, though currently the backend handles uploads securely via Boto3.
- Set up an IAM Role with `s3:PutObject` and `s3:GetObject` permissions for your backend server.

### 3. Frontend Deployment (AWS Amplify & CloudFront)
- Connect your Git repository to **AWS Amplify**.
- Amplify will automatically detect the `amplify.yml` file included in this repository.
- Ensure the build settings point to `frontend/.output/public` (as configured).
- Add `API_BASE_URL` as an Environment Variable in the Amplify console pointing to your deployed backend.
- Amplify automatically sets up Amazon CloudFront to serve the static generated Nuxt application globally with low latency.

### 4. Backend Deployment
- The FastAPI backend can be containerized using Docker and deployed to **AWS App Runner**, **AWS ECS (Fargate)**, or configured behind an API Gateway using **AWS Lambda** (via Magnum).
- Expose the deployed backend URL to the Frontend `API_BASE_URL`.
