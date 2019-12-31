import Startup from './startup';
import { loggerMiddleware } from '../middlewares/logger';

const app = new Startup({
  middleWares: [
    loggerMiddleware
  ]
});
app.start();