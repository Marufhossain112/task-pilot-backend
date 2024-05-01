import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { ProjectService } from './project.service';
import { IProject } from './project.interface';
import pick from '../../../shared/pick';
import { paginationFields } from '../../../constants/pagination';

const createProject = catchAsync(async (req: Request, res: Response) => {
    const { ...project } = req.body;
    const result = await ProjectService.createProject(project);
    sendResponse<IProject>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Project created successfully',
        data: result,
    });
});

const getAllProjects = catchAsync(async (req: Request, res: Response) => {
    const paginationOptions = pick(req.query, paginationFields);
    const result = await ProjectService.getAllProjects(paginationOptions);
    sendResponse<IProject[]>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'All projects retrieved successfully',
        meta: result.meta,
        data: result.data,
    });
});


const getSingleProject = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await ProjectService.getSingleProject(id);
    sendResponse<IProject>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Single project fetched successfully',
        data: result,
    });
});



const editProject = catchAsync(async (req: Request, res: Response) => {
    const { project_id } = req.params;
    const { ...payload } = req.body;
    const result = await ProjectService.editProject(project_id, payload);
    sendResponse<Partial<IProject>>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Project edited successfully',
        data: result,
    });
});

const deleteProject = catchAsync(async (req: Request, res: Response) => {
    const { project_id } = req.params;
    const result = await ProjectService.deleteProject(project_id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Project deleted successfully',
        data: result,
    });
});



export const ProjectController = {
    createProject,
    getAllProjects,
    getSingleProject,
    deleteProject,
    editProject,
};
