import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import User from "../typeorm/entities/User";
import UsersRepository from "../typeorm/repositories/UsersRepository";

interface IRequest {
  name: string;
  email: string;
}

export default class CreateUserService {
  public async execute({ name, email }: IRequest): Promise<User> {
    const userRepo = getCustomRepository(UsersRepository);

    const user =  userRepo.create({ name, email });
    await userRepo.save(user);

    return user;
  }
}
