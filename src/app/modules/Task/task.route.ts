import express from 'express';
import { TaskController } from './task.controller';

const router = express.Router();

router.post('/create', TaskController.createTask);
router.put('/edit-task/:task_id', TaskController.editTask);
router.put('/mark-as-complete/:task_id', TaskController.markTaskAsComplete);
router.delete('/delete-task/:task_id', TaskController.deleteTask);
router.get('/:id', TaskController.getSingleTask);
router.get('/', TaskController.getAllTasks);

export const TaskRoutes = router;
