import swaggerUi from "swagger-ui-express";
import { Express } from "express";

export const setupSwagger = (app: Express) => {
  // Serve Swagger UI
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(require('../../public/swagger.json'), {
      explorer: true,
      customCss: '.swagger-ui .topbar { display: none }',
    })
  );
}; 