<h1 align="center">Order Management API</h1>

<p align="center">
  RESTful API for order management built with Node.js, Express, Sequelize, SQLite, JWT authentication, and Swagger documentation.
</p>

<p align="center">
  <a href="#about">About</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#workflow">Workflow</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#technologies">Technologies</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#features">Features</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#project-structure">Project Structure</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#authentication">Authentication</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#api-endpoints">API Endpoints</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#screenshots">Screenshots</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white" alt="Sequelize" />
  <img src="https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white" alt="SQLite" />
  <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" alt="JWT" />
  <img src="https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black" alt="Swagger" />
  <img src="https://img.shields.io/badge/Jira-0052CC?style=for-the-badge&logo=jira&logoColor=white" alt="Jira" />
  <img src="https://img.shields.io/badge/SCRUM-6DB33F?style=for-the-badge&logoColor=white" alt="SCRUM" />
</p>

---

## About

Order Management API is a backend application designed to manage orders and their related items through a complete RESTful interface.

The project was built with a layered architecture focused on maintainability, clear separation of responsibilities, and scalability. It includes request validation, payload transformation, SQL data persistence, protected routes with JWT, and interactive API documentation with Swagger.

This application supports the full order lifecycle, from creation to deletion, while also handling authentication and structured API responses.

---

## Workflow

This project was developed following an organized delivery flow using **SCRUM practices** and **Jira-based task management**.

The development process included:

- task breakdown into epics, tasks, and subtasks
- incremental implementation by feature
- organized Git history with task-based commits
- pull request flow for feature delivery and review
- clear separation between setup, business logic, endpoints, authentication, and documentation

This approach helped keep the implementation modular, trackable, and easy to maintain.

---

## Technologies

<p align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="40" alt="Node.js" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" height="40" alt="Express" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" alt="JavaScript" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" height="40" alt="Sequelize" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" height="40" alt="SQLite" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg" height="40" alt="Swagger" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" height="40" alt="Git" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" height="40" alt="GitHub" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" height="40" alt="Jira" />
</p>

### Main stack

- **Node.js**
- **Express**
- **JavaScript**
- **Sequelize**
- **SQLite**
- **JWT**
- **Swagger**
- **Joi**
- **Git & GitHub**
- **Jira**
- **SCRUM**

---

## Features

- Create a new order
- Get an order by ID
- List all orders
- Update an existing order
- Delete an order
- Validate incoming request payloads
- Transform request payloads into the internal persistence structure
- Protect order routes with JWT authentication
- Generate interactive API documentation with Swagger
- Use a modular architecture with controllers, services, models, middlewares, and utilities

---

## Architecture Highlights

This project follows a layered architecture to keep responsibilities well separated:

- **Routes** handle endpoint definitions
- **Controllers** manage request and response flow
- **Services** centralize business logic
- **Models** define database entities and relationships
- **Middlewares** handle validation, authentication, and errors
- **Utils** provide reusable transformation logic
- **Config** stores environment and integration setup

---

## Project Structure

```bash
src/
  config/
    database.js
    swagger.js
  controllers/
    authController.js
    orderController.js
  middlewares/
    authenticateToken.js
    errorHandler.js
    validateOrder.js
  models/
    index.js
    Item.js
    Order.js
  routes/
    authRoutes.js
    orderRoutes.js
  services/
    orderService.js
  utils/
    orderMapper.js
  app.js
  server.js
```

## Authentication

This API uses **JWT authentication** for order management endpoints.

### Login endpoint

```http
POST /auth/login
```

### Request body

```json
{
  "username": "admin",
  "password": "admin123"
}
```

### Success response

```json
{
  "message": "Login successful.",
  "token": "your_jwt_token"
}
```

### Using the token

After authenticating, send the token in the `Authorization` header using the Bearer format:

```http
Authorization: Bearer your_jwt_token
```

### Protected routes

The following routes require authentication:

- `POST /order`
- `GET /order/list`
- `GET /order/:orderId`
- `PUT /order/:orderId`
- `DELETE /order/:orderId`

---

## API Endpoints

### Authentication
- `POST /auth/login`

### Orders
- `POST /order`
- `GET /order/list`
- `GET /order/:orderId`
- `PUT /order/:orderId`
- `DELETE /order/:orderId`

---

## Request Example

### Create or update order

```json
{
  "numeroPedido": "v10089015vdb-01",
  "valorTotal": 10000,
  "dataCriacao": "2023-07-19T12:24:11.5299601+00:00",
  "items": [
    {
      "idItem": "2434",
      "quantidadeItem": 1,
      "valorItem": 1000
    }
  ]
}
```

---

## Payload Transformation

Before persistence, the incoming payload is transformed into the internal structure used by the database.

### Input payload

```json
{
  "numeroPedido": "v10089015vdb-01",
  "valorTotal": 10000,
  "dataCriacao": "2023-07-19T12:24:11.5299601+00:00",
  "items": [
    {
      "idItem": "2434",
      "quantidadeItem": 1,
      "valorItem": 1000
    }
  ]
}
```

### Stored structure

```json
{
  "orderId": "v10089015vdb",
  "value": 10000,
  "creationDate": "2023-07-19T12:24:11.529Z",
  "items": [
    {
      "orderId": "v10089015vdb",
      "productId": 2434,
      "quantity": 1,
      "price": 1000
    }
  ]
}
```

---

## Swagger Documentation

Interactive API documentation is available at:

```bash
http://localhost:3000/api-docs
```

Swagger can be used to:

- inspect available endpoints
- test requests directly from the browser
- authenticate using JWT through the **Authorize** button
- validate request and response examples

---

## Response Codes

### Authentication
- `200 OK` — Login successful
- `400 Bad Request` — Missing credentials
- `401 Unauthorized` — Invalid credentials

### Orders
- `200 OK` — Request completed successfully
- `201 Created` — Order created successfully
- `204 No Content` — Order deleted successfully
- `400 Bad Request` — Validation error
- `401 Unauthorized` — Missing or invalid token
- `404 Not Found` — Order not found
- `409 Conflict` — Order already exists

---

## Screenshots

### Swagger overview
![Swagger Overview](docs/images/swagger-overview.png)

### Login endpoint
![Login Endpoint](docs/images/login-endpoint.png)

### Create order
![Create Order](docs/images/create-order-endpoint.png)

### Get order by ID
![Get Order](docs/images/get-order-endpoint.png)

### List orders
![List Orders](docs/images/list-orders-endpoint.png)

### Update order
![Update Order](docs/images/update-order-endpoint.png)

### Delete order
![Delete Order](docs/images/delete-order-endpoint.png)

### Protected route with JWT
![JWT Protected Route](docs/images/jwt-protected-endpoint.png)

---

## Future Improvements

- Add automated tests with Jest and Supertest
- Add Docker support
- Add database migrations and seeders
- Improve login flow with persisted users
- Add role-based authorization
- Add refresh token flow

---
