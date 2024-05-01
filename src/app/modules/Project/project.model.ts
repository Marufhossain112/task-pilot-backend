import { Schema, model } from 'mongoose';
import { IProject, ProjectModel } from './project.interface';


export const projectSchema = new Schema<IProject, ProjectModel>(
    {
        title: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);
export const Project = model<IProject, ProjectModel>('Project', projectSchema);
