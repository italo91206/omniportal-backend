import { Router } from 'express';
import MetricController from '../controllers/MetricController';

const routes = Router();

routes.use('/metrics', MetricController)

export default routes