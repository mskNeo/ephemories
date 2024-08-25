# Ephemories
Ephemories is a MERN Fullstack project where users can create "ephemos" or small bits of text on a webpage and have it disappear after a week.

## Server
The backend server is an Express Node.js app that connects to a MongoDB Atlas cluster to handle data storage and retrieval. It is designed with Domain-Driven Design in mind. It follows the following design patterns:
- MVC
- Repository
- Dependency Injection
- Decorators

### Backend Features
- Logging Middleware
- Error handling (need to flesh out)
- Pagination
- Unit/Integration Testing (coming soon)

### Backend TODO
- Convert writing dates to UTC and reading to local time

## Client
The client will be a React app that is connected to the server. Coming soon.
