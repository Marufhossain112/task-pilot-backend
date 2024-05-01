import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { TaskService } from './task.service';
import { ITask, TaskFilters } from './task.interface';
import pick from '../../../shared/pick';
import { paginationFields } from '../../../constants/pagination';

const createTask = catchAsync(async (req: Request, res: Response) => {
    const { ...task } = req.body;
    const result = await TaskService.createTask(task);
    sendResponse<ITask>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Task created successfully',
        data: result,
    });
});

const getAllTasks = catchAsync(async (req: Request, res: Response) => {
    const filters = pick(req.query, TaskFilters);
    // eslint-disable-next-line no-console
    console.log('filters', filters);
    const paginationOptions = pick(req.query, paginationFields);
    const result = await TaskService.getAllTasks(filters, paginationOptions);
    // console.log(paginationOptions);
    sendResponse<ITask[]>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'All tasks retrieved successfully',
        meta: result.meta,
        data: result.data,
    });
});


const getSingleTask = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await TaskService.getSingleTask(id);
    sendResponse<ITask>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Single task fetched successfully',
        data: result,
    });
});



const editTask = catchAsync(async (req: Request, res: Response) => {
    const { task_id } = req.params;
    const { ...payload } = req.body;
    const result = await TaskService.editTask(task_id, payload);
    sendResponse<Partial<ITask>>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Task edited successfully',
        data: result,
    });
});
const markTaskAsComplete = catchAsync(async (req: Request, res: Response) => {
    const { task_id } = req.params;
    const result = await TaskService.markTaskAsComplete(task_id);
    sendResponse<Partial<ITask>>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Task marked as complete successfully',
        data: result,
    });
});

const deleteTask = catchAsync(async (req: Request, res: Response) => {
    const { task_id } = req.params;
    const result = await TaskService.deleteTask(task_id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Task deleted successfully',
        data: result,
    });
});



export const TaskController = {
    createTask,
    getAllTasks,
    getSingleTask,
    deleteTask,
    editTask,
    markTaskAsComplete
};
