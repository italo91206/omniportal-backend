import { Router } from 'express';
import MetricController from '../controllers/MetricController';
import PageController from '../controllers/PageController';

const routes = Router();

routes.use('/metrics', MetricController)
routes.use('/pages', PageController)

export default routes