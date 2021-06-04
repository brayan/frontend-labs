import { Request, Response } from 'express';
import GetUsers from '../../domain/usecase/GetUsers';

export default class UserController {

    constructor(private getUsers: GetUsers) { }

    async onRequestGetUsers(req: Request, res: Response) {
        try {
            const users = await this.getUsers.execute();
            return res.json(users);
        } catch (error) {
            // TODO: check how to error handling
            return res.send(error);
        }
    }
}