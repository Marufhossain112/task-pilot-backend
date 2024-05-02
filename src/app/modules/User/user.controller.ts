import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { UserService } from "./user.service";


const createUserController = catchAsync(async (req: Request, res: Response) => {
  // const { ...userData } = req.body;
  const response = await fetch("https://dummyjson.com/users");
  const data = await response.json();
  const userData = data?.users;
  // console.log("let's see", data.users);
  // return;
  const result = await UserService.createUserService(userData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `Users are created successfully`,
    data: result,
  });
});

const loginUser = catchAsync(async (req: Request, res: Response) => {
  // const { ...userData } = req.body;
  const { ...loginData } = req.body;
  console.log("login daata",loginData)
  // return;
  const result = await UserService.loginService(loginData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `User logged in successfully`,
    data: result,
  });
});

const getAllUsers = catchAsync(async (req: Request, res: Response) => {

  const result = await UserService.getAllUsers();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `Retrieved all users successfully`,
    data: result,
  });
});



export const UserController = {
  createUserController,
  loginUser,
  getAllUsers
};
