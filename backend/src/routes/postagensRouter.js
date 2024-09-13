import { Router } from "express";
import {
  AtualizarPostagem,
  criarPostagem,
  DeletarPostagem,
  ListarPostagens,
  ListarUnicaPostagem,
} from "../controllers/postagensController.js";

import Imageupload from "../helpers/image-upload.js";

const router = Router();

router.post("/", Imageupload.single("imagem"), criarPostagem);
router.get("/", ListarPostagens);
router.get("/:id", ListarUnicaPostagem);
router.put("/:id", AtualizarPostagem);
router.delete("/:id", DeletarPostagem);

export default router;
