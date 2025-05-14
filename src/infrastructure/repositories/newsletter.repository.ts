import { Newsletter } from '../../domain/entities/Newsletter';
import { BaseRepository } from './base.repository';

export class NewsletterRepository extends BaseRepository<Newsletter> {
  constructor() {
    super('newsletter');
  }

  async findByEmail(email: string): Promise<Newsletter | null> {
    const newsletter = await this.prisma.newsletter.findUnique({
      where: { email }
    });

    if (!newsletter) return null;

    return new Newsletter({
      email: newsletter.email,
      active: newsletter.active,
      userId: newsletter.userId,
    });
  }
} 