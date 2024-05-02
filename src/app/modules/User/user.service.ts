import httpStatus from "http-status";
import ApiError from "../../../errors/ApiErrors";
import { ILoginUser, IUser } from "./user.interface";
import { User } from "./user.modal";

const createUserService = async (payload: IUser[]): Promise<IUser[] | undefined> => {
  const result = await User.create(payload);
  return result;
};

const loginService = async (
  payload: ILoginUser
) => {
  const { username, password } = payload;

  const isUserExist = await User.findOne({ username });

  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, "User does not exist");
  }

  if (
    isUserExist.password && (isUserExist.password !== password)
  ) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "Password is incorrect");
  }


  const response = await fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username,
      password,

    })
  });

  const data = await response.json();
  return data;

};


const getAllUsers = async () => {
  const whereConditions = {};
  const result = await User.find(whereConditions);
  return result;
};


export const UserService = {
  createUserService,
  loginService,
  getAllUsers
};
