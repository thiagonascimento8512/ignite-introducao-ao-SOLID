import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const checkUserExists = this.usersRepository.findById(user_id);

    if (!checkUserExists) {
      throw new Error("This search does not execute by an inexists user");
    }

    if (!checkUserExists.admin) {
      throw new Error("This search does not execute by a non user admin");
    }

    const allUsers = this.usersRepository.list();
    return allUsers;
  }
}

export { ListAllUsersUseCase };
