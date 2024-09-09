import {Z} from "zod"
import User from "../models/userModel.js"


  const createSchema = z.object({
    nome: z
      .string()
      .min(3, { msg: "O nome deve ter pelo menos 3 caracteres" })
      .transform((txt) => txt.toLowerCase()),
    email: z
      .string()
      .email("Bote um email valido"),
    senha: z
      .string()
      .min(8, { msg: "A senha deve conter pelomenos 8 caracteres" })
      .regex(/[a-zA-Z]/, { msg: "A senha deve conter pelo menos uma letra" })
      .regex(/\d/, { msg: "A senha deve conter pelo menos um número" }),
      papel: z 
      .string(),
  });
  

  export const create = async (req,res) =>{
    try{
        const{nome, email, senha, papel } = createSchema.parse(req.body)

      const newUser = await User.create({
        nome,
        email,
        senha,
        papel,
      });

      res.status(201).json(newUser);
    } catch(error){
      if(error instanceof Z.ZodError){
        return res.status(400).json({
          errors: error.errors.map((err)=>({
            path:err.path,
            message: err.message
          })),
        });
      }
      console.error(error);
      res.status(500).json({error: "erro ao criar o usuario"});
    }};

