import User from "../entity/User";

interface UserRepository {
    getAllUsers(): Promise<Array<User>>
}

export default UserRepository;