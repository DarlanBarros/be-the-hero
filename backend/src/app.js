import express from 'express';
import router from './routes';
import cors from 'cors';

class App {
  constructor(){
    this.server = express();

    this.middlewares();
    this.routes();
    this.cors();
  }

  middlewares(){
    this.server.use(express.json());
  }

  routes(){
    this.server.use(router);
  }

  cors(){
    this.server.use(cors());
  }
}

export default new App().server;