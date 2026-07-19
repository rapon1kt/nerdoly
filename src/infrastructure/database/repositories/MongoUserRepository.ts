import { IUserRepository } from "@/application/ports";
import { User as DomainUser } from "@/domain/entities";
import { UserModel } from "@/infrastructure/database/models";
import { connectToDatabase } from "@/infrastructure/database/mongoose";

export default class MongoUserRepository implements IUserRepository {
  async findByEmail(email: string): Promise<DomainUser | null> {
    await connectToDatabase();
    const user = await UserModel.findOne({ email }).lean();

    if (!user) return null;

    return {
      id: user._id.toString(),
      name: user.name,
      email: user.email,
      password: user.password,
    };
  }

  async create(user: DomainUser): Promise<DomainUser> {
    await connectToDatabase();
    const createdUser = await UserModel.create(user);

    return {
      id: createdUser._id.toString(),
      email: createdUser.email,
      name: createdUser.name,
      password: createdUser.password,
    };
  }
}
