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
app.use('/api/v1/auth', routes);
app.use(errorHandler);

const port = process.env.PORT || 4001;
app.listen(port, () => logger.info(`auth service running on port ${port}`));
