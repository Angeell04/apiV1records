import express from "express";
import type { Express } from "express";
import { env } from "./config/env";
import cors from "cors";
import helmet from "helmet";
import { router as recordsRouter } from "./v1/routes";

const app: Express = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

// Endpoints
app.use('/api/v1/records', recordsRouter);

// Ruta base / Healthcheck
app.get('/', (_req, res) => {
    res.send({ status: 'OK', message: 'API Records v1 en funcionamiento' });
});

app.listen(env.port, () => {
    console.log(`Servidor ejecutandose en el puerto (${env.port})`);
});
