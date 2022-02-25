import { Request, Response } from 'express';
import CreateSessionService from '../services/CreateSessionService';

export default class SessionsController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { id } = req.body;

    const createSession = new CreateSessionService();

    const user = await createSession.execute({
      id
    });

    
    return res.json(user);
  }
}
