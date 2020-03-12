import { Router } from 'express';

const routes = new Router();

routes.get('/hw', (req, res) => {
    res.json({
        msg: "Te amo mo!"
    });
})

export default routes;
