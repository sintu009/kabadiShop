const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Node MySQL API",
      version: "1.0.0",
      description: "Production ready Node.js + MySQL API",
    },
    servers: [
      {
        url: "http://localhost:5000/api",
        description: "Local server",
      },
      {
        url: "http://localhost:5000/api",
        description: "Production server",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./src/routes/*.js", "./src/modules/**/*.js"],
};

module.exports = swaggerJSDoc(options);
