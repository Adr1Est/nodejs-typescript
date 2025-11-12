import express from 'express';
import path from 'path';

interface Options {
  port: number;
  public_path?: string;
}

export class Server {
  
  private app = express();
  private readonly port: number;
  private readonly publicPath: string;

  constructor(options: Options){
    const { port, public_path = 'public' } = options;

    this.port = port;
    this.publicPath = public_path;
  }

  async start(){

    //* Middlewares: Funciones que se ejecutan cada vez que se pasa por una ruta.

    //* Public Folder
    this.app.use( express.static( this.publicPath ));

    //* Routes
    this.app.get('/api/todos', (req, res) => {
      return res.json([
        { id: 1, text: 'Comprar leche', createdAt: new Date() },
        { id: 2, text: 'Aprender Express', createdAt: new Date() },
        { id: 3, text: 'Aprender Docker', createdAt: new Date() },
      ]);
    });

    this.app.get(/.*/, (req, res) => {
      const indexPath = path.join(__dirname + `../../../${this.publicPath}/index.html`);
      res.sendFile(indexPath);
    })

    this.app.listen(this.port, () => {
      console.log(`Server running on PORT: 3000`);
    })

  }

}