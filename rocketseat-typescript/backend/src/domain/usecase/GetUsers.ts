import User from "../entity/User";
import UserRepository from "../repository/UserRepository";

class GetUsers {

    constructor(private userRepository: UserRepository) { }

    async execute(): Promise<Array<User>> {
        return this.userRepository.getAllUsers();
    }

}

export default GetUsers;