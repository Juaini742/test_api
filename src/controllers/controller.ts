import { Request, Response } from 'express';

export default (_req: Request, res: Response) => {
  res.json('<h1>Hello World!</h1>');
};
