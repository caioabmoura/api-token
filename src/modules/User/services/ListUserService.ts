import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import User from "../typeorm/entities/User";
import UsersRepository from "../typeorm/repositories/UsersRepository";

export default class ListUserService {
  public async run(): Promise<User[]> {
    const userRepo = getCustomRepository(UsersRepository);

    const user = userRepo.find();
    

    return user;
  }
}
