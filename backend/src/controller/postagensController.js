import Postagem from "../models/postagensModels.js";
import {z} from "zod";
import formatZodError from "../helper/formatZodError.js";
import { request, response } from "express";


//Validação com ZOD


const criarSchema = z.object({
    titulo: z
      .string()
      .min(3, { message: "o titulo deve conter pelomenos 3 caracteres" }),
      conteudo: z
      .string()
      .min(10, { message: "o conteudo deve conter pelomenos 10" }),
      autor: z
      .string().min(1,{message:"o autor deve ter nome "})
  });

export const criarPostagem = async(request,response)=>{
    const bodyValidation = criarSchema.safeParse(request.body);

    if (!bodyValidation.success) {
        response.status(400).json({
          message: "Os dados recebidos do corpo da aplicação são inválidos",
          detalhes: bodyValidation.error,
        });
        return;
    }

    const {titulo, conteudo,autor} = request.body;

    if(!titulo){
        response.status(400).json({err:"o titulo é obrigatório"})
        return
    }
    if(!conteudo){
        response.status(400).json({err:"o conteudo é obrigatório"})
        return
    }
    if(!autor){
        response.status(400).json({err:"o autor é obrigatório"})
        return
    }

    const novaPostagem = {
        titulo,
        conteudo,
        dataPublicacao,
        autor,
        imagem,
    };
    try{
        await Postagem.create(novaPostagem);
        response.status(201).json({message:"Postagem Criada"})
    } catch (error){
        console.error(error);
        response.status(500).josn({message: "erro ao criar a postagem"})
    }
}