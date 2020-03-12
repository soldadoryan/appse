import express from 'express'; // framework de backend mvc
import routes from './routes';

class App {
    constructor() {
        // criando servidor
        this.server = express();
        this.routes();
        this.middlewares();
    }

    middlewares() {
        // permitindo manipulação de json nas rotas
        this.server.use(express.json());
    }

    routes() {
        this.server.use(routes);
    }
}

export default new App().server;