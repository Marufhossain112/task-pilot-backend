import { IProject } from "./project.interface";
import { Project } from "./project.model";

const createProject = async (project: IProject) => {
    const result = await Project.create(project);
    return result;
};

const getAllProjects = async (
) => {
    const result = await Project.find({});
    return result;
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
