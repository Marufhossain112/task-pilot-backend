import express from "express";
import { UserController } from "./user.controller";

const router = express.Router();

router.post("/registration", UserController.createUserController);
router.post("/login", UserController.loginUser);
router.get("/", UserController.getAllUsers);



export const userRoutes = router;
