import { Request, Response } from "express";

interface Todo {
  id: number;
  text: string;
  completedAt: Date | null;
}

const todos: Todo[] = [
  { id: 1, text: 'Comprar leche', completedAt: new Date() },
  { id: 2, text: 'Aprender Express', completedAt: new Date() },
  { id: 3, text: 'Aprender Docker', completedAt: new Date() },
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
    const { text } = req.body;
    if(!text) return res.status(400).json({ error: "Text property is required" });
    const newTodo = {
      id: todos.length + 1,
      text: text,
      completedAt: new Date()
    }

    todos.push(newTodo);

    return res.json(newTodo);
  }

  public updateTodo = (req: Request, res: Response) => {
    const id = Number(req.params.id);
    if(isNaN(id)) return res.status(400).json({error: `ID argument is not a number`});

    const todo = todos.find(todo => todo.id === id);
    if(!todo)return res.status(404).json({error: `TODO with id ${id} not found`});

    const {text, completedAt} = req.body;
    // if(!text) return res.status(400).json({error: "Text property is required"});

    todo.text = text || todo.text;
    (completedAt === 'null')
      ? todo.completedAt = null 
      : todo.completedAt = new Date(completedAt || todo.completedAt);

    res.json(todo);
  }

}