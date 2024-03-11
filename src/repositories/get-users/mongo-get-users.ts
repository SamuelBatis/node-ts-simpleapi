import { IGetUsersRepository } from "../../controllers/get-users/protocols";
import { User } from "../../models/user";

export class MongoGetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<User[]> {
    return [
      {
        firstName: "Felipe",
        lastName: "Rocha",
        email: "felipe@mail.com",
        password: "123",
      },
    ];
  }
}
