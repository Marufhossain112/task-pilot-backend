import { SortOrder } from 'mongoose';
import { paginationHelpers } from '../../../helpers/paginationHelpers';
import { IPaginationOption } from '../../../interfaces/pagination';
import { ITask, ITaskFilters, TaskFilters } from './task.interface';
import { Task } from './task.model';

const createTask = async (task: ITask) => {
    const result = await Task.create(task);
    return result;
};

const getAllTasks = async (
    filters: ITaskFilters,
    paginationOptions: IPaginationOption
) => {
    const { searchTerm, ...filtersData } = filters;
    const andConditions = [];
    if (searchTerm) {
        andConditions.push({
            $or: TaskFilters.map(field => ({
                [field]: {
                    $regex: searchTerm,
                    $options: 'i',
                },
            })),
        });
    }
    // console.log('filtersData key', Object.entries(filtersData));
    if (Object.keys(filtersData).length) {
        andConditions.push({
            $and: Object.entries(filtersData).map(([field, value]) => ({
                [field]: value,
            })),
        });
    }

    const { page, limit, skip, sortBy, sortOrder } =
        paginationHelpers.calculatePagination(paginationOptions);
    const sortItems: { [key: string]: SortOrder; } = {};
    if (sortBy && sortOrder) {
        sortItems[sortBy] = sortOrder;
    }
    const whereConditions =
        andConditions.length > 0 ? { $and: andConditions } : {};
    const result = await Task.find(whereConditions)
        .sort(sortItems)
        .skip(skip)
        .limit(limit);

    const total = await Task.countDocuments(whereConditions);
    return {
        meta: {
            page,
            limit,
            total,
        },
        data: result,
    };
};


const getSingleTask = async (id: string) => {
    const result = await Task.findOne({ _id: id });
    return result;
};


const editTask = async (task_id: string, payload: Partial<ITask>) => {
    const result = await Task.findOneAndUpdate({ _id: task_id }, payload, {
        new: true,
    });
    return result;
};

const deleteTask = async (id: string) => {
    const result = await Task.findOneAndDelete({ _id: id });
    return result;
};

export const TaskService = {
    createTask,
    getAllTasks,
    getSingleTask,
    deleteTask,
    editTask,
};
