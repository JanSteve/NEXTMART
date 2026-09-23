import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { logger } from './utils/logger';
import { errorHandler } from './middleware/error';
import routes from './routes';

const app = express();
app.use(helmet());
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use('/api/v1/delivery', routes);
app.use(errorHandler);

const port = process.env.PORT || 4007;
app.listen(port, () => logger.info(`logistics service running on port ${port}`));
