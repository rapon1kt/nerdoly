import { User } from "@/domain/entities";
import { IHashService, IUserRepository } from "../ports";

export default class RegisterUserService {
  constructor(
    private userRepository: IUserRepository,
    private hashService: IHashService,
  ) {}

  async execute(data: User): Promise<User> {
    if (!data.email || !data.password) {
      throw new Error("Email and password are required.");
    }

    const existingUser = await this.userRepository.findByEmail(data.email);
    if (existingUser) {
      throw new Error("This email is already registered. Try another.");
    }

    const hashedPassword = await this.hashService.hash(data.password);

    return await this.userRepository.create({
      ...data,
      password: hashedPassword,
    });
  }
}
