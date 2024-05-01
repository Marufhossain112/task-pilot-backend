import express from 'express';
import { ProjectController } from './project.controller';

const router = express.Router();

router.post('/create', ProjectController.createProject);
router.put('/edit-project/:project_id', ProjectController.editProject);
router.delete('/delete-project/:project_id', ProjectController.deleteProject);
router.get('/:id', ProjectController.getSingleProject);
router.get('/', ProjectController.getAllProjects);

export const ProjectRoutes = router;
