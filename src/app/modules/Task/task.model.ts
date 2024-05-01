import { Schema, model } from 'mongoose';
import { ITask, TaskModel } from './task.interface';

export const taskSchema = new Schema<ITask, TaskModel>(
    {
        title: {
            type: String,
            required: true,
        },
        assigned_to: {
            type: [String],
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        due_date: {
            type: String,
            required: true,
        },
        isComplete: {
            type: Boolean,
            default: false,
        },
        status: {
            type: String,
            enum: ['Do', 'In Progress', 'Done'],
            default: 'Do'
        },
    },
    {
        timestamps: true,
    }
);
export const Task = model<ITask, TaskModel>('Task', taskSchema);
