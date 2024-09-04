import "dotenv/config";
import path from "express";
import {fileURLToPath} from "express";
import express from "express";
import cors from "cors"


import conn from "./config/conn.js"

import Postagem from "./models/postagensModels.js";

import postagenRoute from "./routes/postagensRourte.js"



const PORT = process.env.PORT || 3333;
const app = express();

//* 3 middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//*conexão com o banco
conn
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor on PORT: ${PORT}`);
    });
  })
  .catch((error) => console.error(error));

//*utilizar rotas
app.use("/postagens", postagenRoute);

app.use((request, response) => {
  response.status(404).json({ messaSge: "Rota não encontrada" });
});

