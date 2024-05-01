import httpStatus from "http-status";
import ApiError from "../../../errors/ApiErrors";
import {
  ILoginUser,
} from "./user.constant";
import { IUser } from "./user.interface";
import { User } from "./user.modal";

const createUserService = async (payload: IUser): Promise<IUser> => {
  const result = await User.create(payload);
  return result;
};

const loginService = async (
  payload: ILoginUser
) => {
  const { userName, password } = payload;

  const isUserExist = await User.isUserExist(userName);

  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, "User does not exist");
  }

  if (
    isUserExist.password &&
    !(await User.isPasswordMatched(password, isUserExist?.password))
  ) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "Password is incorrect");
  }
};



export const UserService = {
  createUserService,
  loginService
};
