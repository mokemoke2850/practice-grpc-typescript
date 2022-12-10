import express, { json, urlencoded } from 'express';
import { RegisterRoutes } from '@/routes';
import swaggerUi from 'swagger-ui-express';
import SwaggerDocument from '@/swagger.json';

export const app = express();

app.use(
  urlencoded({
    extended: true,
  })
);
app.use(json());

// SwaggerUI
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(SwaggerDocument));

RegisterRoutes(app);
