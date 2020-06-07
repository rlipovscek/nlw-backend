import { Router } from 'express';
import resources from './resources.config';

const router = Router();
resources.forEach(resource => router[resource.type](resource.path, resource.method))
export default router;