import { Request, Response } from 'express'

const loggerMiddleware = (req: Request, resp: Response, next) => {
  const start = Date.now();
    next()
    const ms = Date.now() - start;
    console.log(`${req.method} ${req.originalUrl} - ${ms}ms`);
}

export { loggerMiddleware }