import express = require('express');

export default class Startup {
    app: express.Application;
    port: number;
    address: string;
    constructor( init: { middleWares: any }){
        this.app = express();
        this.port = 3000;
        this.address = '0.0.0.0';
        this.middlewares(init.middleWares);
    }

    private middlewares(middleWares: { forEach: (arg0: (middleWare: any) => void) => void; }) {
        middleWares.forEach(middleWare => {
            this.app.use(middleWare)
        })
    }

    public start = () => {

        this.app.use(express.static('public'))
        this.app.use(express.static('views'))

        this.app.set('view engine', 'pug')
        this.app.get("/", (req: express.Request, res: express.Response) => {
            res.render('index', { title: 'test', message: 'Hello World!'});
        })

        this.app.listen(this.port, () => {
            console.log("* Booting Node server");
            console.log(`* Listening on  ${this.address}:${this.port}!`);
            console.log("Use Ctrl-C to stop");
        })
    }
}

