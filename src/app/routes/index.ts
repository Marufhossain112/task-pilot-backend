import express from 'express';
import { userRoutes } from '../modules/User/user.route';
import { TaskRoutes } from '../modules/Task/task.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: userRoutes,
  },
  {
    path: '/tasks',
    route: TaskRoutes,
  },
];

moduleRoutes.forEach(route => {
  router.use(route.path, route.route);
});

export default router;
