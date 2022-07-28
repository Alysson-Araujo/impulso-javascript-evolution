import { Request } from "express";
import { UsersController } from "./usersController";
import { makeMockResponse } from "../mocks/mockResponse";
describe("User Controller", () => {
  const usersController = new UsersController();

  const mockRequest = {} as Request;
  const mockResponse = makeMockResponse();
  it("Deve listar os nossos usuários", () => {
    usersController.getDatabaseUsuario(mockRequest, mockResponse);
    expect(mockResponse.state.status).toBe(200);
    expect(mockResponse.state.json).toHaveLength(5);
  });

  it("Deve criar um novo usuário", () =>{
      mockRequest.body = {
          nome:"novo usuário"
      }
      usersController.criarUsuario(mockRequest,mockResponse)
      expect(mockResponse.state.status).toBe(201)
      
      expect(mockResponse.state.json).toMatchObject({ "mensagem": `Usuário novo usuário criado!` })
  })
  
  it("Não deve criar um novo usuário com seu nome em branco!", () =>{
      mockRequest.body = {
        nome: ""
      }
      usersController.criarUsuario(mockRequest,mockResponse)
      expect(mockResponse.state.status).toBe(403)
      expect(mockResponse.state.json).toMatchObject({ "mensagem": "Não é possível criar um usuário seu seu nome." })
  })
});
