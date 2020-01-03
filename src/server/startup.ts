import express = require('express');
import IController from '../controllers/Base';

export default class Startup {
    app: express.Application;
    port: number;
    address: string;
    constructor( init: { controllers: IController[], middleWares: any }){
        this.app = express();
        this.port = 3000;
        this.address = '0.0.0.0';
        this.middlewares(init.middleWares);
        this.registerRoute(init.controllers);
    }

    private middlewares(middleWares: { forEach: (arg0: (middleWare: any) => void) => void; }) {
        middleWares.forEach(middleWare => {
            this.app.use(middleWare)
        })
    }

    private registerRoute(controllers) {
        controllers.forEach(controller => {
            this.app.use('/', controller.router)
        })
    }


    public start = () => {

        this.app.use(express.static('public'))
        this.app.use(express.static('views'))
        this.app.set('view engine', 'jsx')
        this.app.set('views', __dirname + '/../views');
        this.app.engine('jsx', require('express-react-views').createEngine());

        this.app.get("/", (req: express.Request, res: express.Response) => {
            res.render('index', { name: 'test'});
        })

        this.app.listen(this.port, () => {
            console.log("* Booting Node server");
            console.log(`* Listening on  ${this.address}:${this.port}!`);
            console.log("Use Ctrl-C to stop");
        })
    }
}

