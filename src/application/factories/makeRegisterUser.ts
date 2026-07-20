import { MongoUserRepository } from "@/infrastructure/database/repositories";
import { BcryptHashService } from "@/infrastructure/encrypt/BcryptHasher";
import { RegisterUserService } from "../services";

export function makeRegisterUser() {
  const repository = new MongoUserRepository();
  const passwordHasher = new BcryptHashService();
  return new RegisterUserService(repository, passwordHasher);
}
