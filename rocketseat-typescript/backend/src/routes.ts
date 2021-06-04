import { Router } from 'express';
import UserController from './presentation/controller/UserController';
import UserRepositoryImpl from './data/repository/UserRepositoryImpl';
import GetUsers from './domain/usecase/GetUsers';

const routes = Router();
const userRepository = new UserRepositoryImpl();
const getUsers = new GetUsers(userRepository);
const userController = new UserController(getUsers);

routes.get('/', async (req, res) => {
    return res.send('Hello!!!!');
});

routes.get('/users', async (req, res) => {
    userController.onRequestGetUsers(req, res);
});

export default routes;