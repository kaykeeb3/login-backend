# Login - Backend

This is the backend of a login screen project, an example application for managing user authentication. The project is built with **Node.js**, **Express.js**, **Jest**, **Prisma**, **PostgreSQL**, and uses **JWT** for authentication.

## Getting Started

Before starting, make sure you have **Docker** and **Docker Compose** installed on your system.

### 1. Clone the Repository

```bash
git clone https://github.com/kaykeeb3/login-backend.git
cd login-backend
npm install
```

### 2. Create a `.env` File

Create a `.env` file at the root of the project with the following environment variables:

```bash
DATABASE_URL=postgresql://user:password@localhost:5432/login_db
JWT_SECRET=
```

### 3. Start Docker Compose

```bash
docker-compose up -d
```

### 4. Install Dependencies and Run Migrations

```bash
npm install
npx prisma migrate dev
```

### 5. Start the Server

```bash
npm start
```

## Folder & File Structure

The project follows the structure below:

```
|-- src
|   |-- controllers
|   |   |-- authController.js
|   |   |-- userController.js
|   |-- middlewares
|   |   |-- authenticationMiddleware.js
|   |-- routes
|   |   |-- authRoutes.js
|   |   |-- userRoutes.js
|   |-- services
|   |   |-- authService.js
|   |   |-- userService.js
|   |-- utils
|   |   |-- jwtUtils.js
|   |-- app.js
|   |-- db.js
|-- .env
|-- .gitignore
|-- package.json
|-- prisma
|   |-- schema.prisma
|-- tests
|   |-- authService.test.js
|   |-- authController.test.js
|   |-- userController.test.js
|-- docker-compose.yml
|-- README.md
```
