import { Model } from "mongoose";

export type ITask = {
    title: string;
    description: string;
    assigned_to: string[];
    due_date: string;
    isComplete: boolean;
    status: 'Do' | 'In Progress' | 'Done';
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
};

export const SearchTaskFilters = ['searchTerm', 'title'];
export const TaskFilters = ['searchTerm', 'title', 'assigned_to', 'due_date', 'status'];