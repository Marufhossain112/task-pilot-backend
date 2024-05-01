import { Model } from "mongoose";

export type IProject = {
    title: string;
};
export type ProjectModel = Model<IProject, Record<string, unknown>>;

