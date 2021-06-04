import UserRepository from "../repository/UserRepository";
import GetUsers from "./GetUsers";

describe('Get Users', async () => {

    let getUsers: GetUsers;
    let userRepository: UserRepository;

    beforeEach(async () => {
        const users = [
            {
                name: 'Brayan', email: 'brayan.bedritchuk@gmail.com',
            }
        ];

        userRepository = {
            getAllUsers: jest.fn(() => Promise.all(users))
        }

        getUsers = new GetUsers(userRepository);
    });

    it('should get users from repository', async () => {
        getUsers.execute();
        expect(userRepository.getAllUsers).toHaveBeenCalled();
    });

});