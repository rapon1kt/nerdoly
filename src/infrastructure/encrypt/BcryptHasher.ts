import { hash, compare } from "bcryptjs";
import { IHashService } from "@/application/ports";

export class BcryptHashService implements IHashService {
  async hash(plainText: string): Promise<string> {
    return await hash(plainText, 12);
  }

  async compare(plainText: string, hashedText: string): Promise<boolean> {
    return await compare(plainText, hashedText);
  }
}
