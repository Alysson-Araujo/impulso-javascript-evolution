import { database } from "../database";
import { Request,Response } from "express";

interface User{
    nome:string
}

export class UsersController {
    criarUsuario(req:Request, res:Response): Response {
        const user:User = req.body;

        if (user.nome.length === 0) {
            return res.status(403).json({ "mensagem": "Não é possível criar um usuário seu seu nome." });
        }
        database.push(user.nome);
        return res.status(201).json({ "mensagem": `Usuário ${user.nome} criado!` });
    }


    getDatabaseUsuario(req:Request,res:Response){
        return res.status(200).json(database);
    }
}
