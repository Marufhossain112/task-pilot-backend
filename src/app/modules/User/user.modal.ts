import { Schema, model } from "mongoose";
import { IUser, UserModel } from "./user.interface";

export const userSchema = new Schema<IUser, UserModel>({
  id: {
    type: Number,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  maidenName: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  birthDate: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  bloodGroup: {
    type: String,
    required: true
  },
  height: {
    type: Number,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  eyeColor: {
    type: String,
    required: true
  },
  hair: {
    color: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  }
});


export const User = model<IUser, UserModel>("User", userSchema);
