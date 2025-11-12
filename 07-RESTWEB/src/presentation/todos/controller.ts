import { Request, Response } from "express";

const todos = [
  { id: 1, text: 'Comprar leche', createdAt: new Date() },
  { id: 2, text: 'Aprender Express', createdAt: new Date() },
  { id: 3, text: 'Aprender Docker', createdAt: new Date() },
];

export class TodosController {

  //* Dependency Injection
  constructor(){}

  public getTodos = (req: Request, res: Response) => {
    return res.json(todos);
  }

  public getTodoById = (req: Request, res: Response) => {
    const id = Number(req.params.id);
    if(isNaN(id)) return res.status(400).json({error: `ID argument is not a number`});

    const todo = todos.find(todo => todo.id === id);

    return (todo)
      ? res.json(todo)
      : res.status(404).json({error: `TODO with id ${id} not found`});
  }

  public createTodo = (req: Request, res: Response) => {
    const body = req.body;
    res.json(body);
  }

}