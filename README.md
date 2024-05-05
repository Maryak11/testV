# Project Setup Using Docker Compose

This README provides instructions on how to set up and run the `admin` and `client` services using Docker Compose.

## Prerequisites

Before you begin, ensure you have Docker and Docker Compose installed on your machine. You can download and install Docker from [Docker's official website](https://www.docker.com/get-started).

## Services

The setup includes the following services:
- `admin`: A front and back (Nuxt Nitro Server) service accessible at `localhost:3000`.
- `client`: A frontend service accessible at `localhost:3001`.

## Getting Started

Follow these steps to get the services running:

### 1. Clone the Repository

Clone this repository to your local machine using:

```bash
git clone <repository-url>
cd <repository-directory>
docker compose up --build
