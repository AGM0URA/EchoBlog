import { Router } from "express";

import {
    criarPostagem,
} from"../controller/postagensController.js";

const router = Router()

router.post("/", criarPostagem)