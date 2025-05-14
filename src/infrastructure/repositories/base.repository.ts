import { PrismaClient } from '@prisma/client';
import { database } from '../database/connection';

export abstract class BaseRepository<T> {
  protected prisma: PrismaClient;
  protected model: string;

  constructor(model: string) {
    this.prisma = database.getPrismaClient();
    this.model = model;
  }

  async create(data: any): Promise<T> {
    return this.prisma[this.model].create({ data });
  }

  async findById(id: string): Promise<T | null> {
    return this.prisma[this.model].findUnique({
      where: { id }
    });
  }

  async findAll(): Promise<T[]> {
    return this.prisma[this.model].findMany();
  }

  async update(id: string, data: any): Promise<T> {
    return this.prisma[this.model].update({
      where: { id },
      data
    });
  }

  async delete(id: string): Promise<T> {
    return this.prisma[this.model].delete({
      where: { id }
    });
  }
} 