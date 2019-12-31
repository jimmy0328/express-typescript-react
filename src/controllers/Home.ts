import * as express from 'express'
import { Request, Response } from 'express'
import IBaseController from './Base'

class Home implements IBaseController {
  PATH = '/home'
  router = express.Router()
  constructor(){
    this.initRoutes();
  }

  initRoutes() {
    this.router.get(this.PATH, this.page)
  }

  page = (req: Request, res: Response) => {
    res.render('index', { name: 'test222'});
  }

}

export default Home;