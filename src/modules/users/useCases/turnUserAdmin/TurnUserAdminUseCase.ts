import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const getUser = this.usersRepository.findById(user_id);

    console.log(getUser);

    if (!getUser) {
      throw new Error("This user does not exists");
    }

    const user = this.usersRepository.turnAdmin(getUser);
    return user;
  }
}

export { TurnUserAdminUseCase };
