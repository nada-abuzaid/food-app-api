import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Food App API',
      description:
        'This is a REST API for a food ordering application. It allows users to browse restaurants, view menus, and place orders',
    },
    servers: [
      {
        url: 'http://localhost:3000/api/v1',
      },
    ],
  },
  apis: ['./src/docs/*.yaml'],
};

export const swaggerSpec = swaggerJSDoc(options);

export const swaggerDocs = (app) => {
  app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec, {
      customSiteTitle: 'Food App API Docs',
    })
  );
};