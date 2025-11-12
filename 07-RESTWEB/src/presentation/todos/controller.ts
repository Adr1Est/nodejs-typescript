import { Request, Response } from "express";

export class TodosController {

  //* Dependency Injection
  constructor(){}

  public getTodos = (req: Request, res: Response) => {
    return res.json([
      { id: 1, text: 'Comprar leche', createdAt: new Date() },
      { id: 2, text: 'Aprender Express', createdAt: new Date() },
      { id: 3, text: 'Aprender Docker', createdAt: new Date() },
    ]);
  }

}