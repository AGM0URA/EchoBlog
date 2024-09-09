import { Router } from "express";
import { create } from "../controller/userController.js";

const router = Router();

router.post("/registro", create);

export default router;
