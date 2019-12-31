import Startup from './startup';
import { loggerMiddleware } from '../middlewares/logger';
import Home from '../controllers/Home';

const controllers = [
  new Home()
]
const app = new Startup({
  controllers: controllers,
  middleWares: [
    loggerMiddleware
  ]
});
app.start();