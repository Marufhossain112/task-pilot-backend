import express from 'express';
import { userRoutes } from '../modules/User/user.route';
import { TaskRoutes } from '../modules/Task/task.route';
import { ProjectRoutes } from '../modules/Project/project.route';

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
  {
    path: '/projects',
    route: ProjectRoutes,
  },
];

moduleRoutes.forEach(route => {
  router.use(route.path, route.route);
});

export default router;
