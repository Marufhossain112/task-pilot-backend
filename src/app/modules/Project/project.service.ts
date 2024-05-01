import { SortOrder } from "mongoose";
import { IPaginationOption } from "../../../interfaces/pagination";
import { IProject } from "./project.interface";
import { Project } from "./project.model";
import { paginationHelpers } from "../../../helpers/paginationHelpers";

const createProject = async (project: IProject) => {
    const result = await Project.create(project);
    return result;
};

const getAllProjects = async (
    paginationOptions: IPaginationOption
) => {
    const { page, limit, skip, sortBy, sortOrder } =
        paginationHelpers.calculatePagination(paginationOptions);
    const sortItems: { [key: string]: SortOrder } = {};
    if (sortBy && sortOrder) {
        sortItems[sortBy] = sortOrder;
    }
    const whereConditions = {};
    const result = await Project.find(whereConditions)
        .sort(sortItems)
        .skip(skip)
        .limit(limit);

    const total = await Project.countDocuments(whereConditions);
    return {
        meta: {
            page,
            limit,
            total,
        },
        data: result,
    };
};


const getSingleProject = async (id: string) => {
    const result = await Project.findOne({ _id: id });
    return result;
};




const editProject = async (project_id: string, payload: Partial<IProject>) => {
    const result = await Project.findOneAndUpdate({ _id: project_id }, payload, {
        new: true,
    });
    return result;
};

const deleteProject = async (id: string) => {
    const result = await Project.findOneAndDelete({ _id: id });
    return result;
};

export const ProjectService = {
    createProject,
    getAllProjects,
    getSingleProject,
    deleteProject,
    editProject,
};
