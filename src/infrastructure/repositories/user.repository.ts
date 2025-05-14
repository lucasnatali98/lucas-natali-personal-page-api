import { User, IUser } from "../../domain/entities/User";
import { BaseRepository } from "./base.repository";

export class UserRepository extends BaseRepository<User> {
  constructor() {
    super("user");
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user) return null;

    return new User({
      email: user.email,
      name: user.name,
      password: user.password,
      role: user.role as any,
    });
  }
}
