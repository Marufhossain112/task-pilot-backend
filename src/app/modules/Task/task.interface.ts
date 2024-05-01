import { Model, Types } from "mongoose";
import { IProject } from "../Project/project.interface";

export type ITask = {
    title: string;
    description: string;
    assigned_to: string[];
    due_date: string;
    isComplete: boolean;
    status: 'Do' | 'In Progress' | 'Done';
    project: Types.ObjectId | IProject;
};
export type TaskModel = Model<ITask, Record<string, unknown>>;

export type ISearchTaskFilters = {
    searchTerm?: string;
    title?: string;
};
export type ITaskFilters = {
    searchTerm?: string;
    title?: string;
    assigned_to?: string[];
    due_date?: string;
    status?: 'Do' | 'In Progress' | 'Done';
    project?: string;
};

export const SearchTaskFilters = ['searchTerm', 'title'];
export const TaskFilters = ['searchTerm', 'title', 'assigned_to', 'due_date', 'status', 'project'];