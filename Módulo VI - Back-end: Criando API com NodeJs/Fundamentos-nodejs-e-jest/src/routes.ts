import { Router } from "express";
import { UsersController } from "./controllers/usersController";

const usersController = new UsersController();

const routers = Router();



routers.get("/users", usersController.getDatabaseUsuario)
routers.post("/users", usersController.criarUsuario)

export {routers}