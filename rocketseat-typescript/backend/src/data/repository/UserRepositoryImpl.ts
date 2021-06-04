import User from "../../domain/entity/User";
import UserRepository from "../../domain/repository/UserRepository";

class UserRepositoryImpl implements UserRepository {

    async getAllUsers(): Promise<Array<User>> {
        return Promise.all([
            {
                name: 'Brayan', email: 'brayan.bedritchuk@gmail.com',
            }
        ]);
    }
}

export default UserRepositoryImpl;