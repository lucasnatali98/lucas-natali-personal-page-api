import { PrismaClient } from '@prisma/client';

class DatabaseConnection {
  private static instance: DatabaseConnection;
  private prisma: PrismaClient;

  private constructor() {
    this.prisma = new PrismaClient();
  }

  public static getInstance(): DatabaseConnection {
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection();
    }
    return DatabaseConnection.instance;
  }

  public getPrismaClient(): PrismaClient {
    return this.prisma;
  }
}

export const database = DatabaseConnection.getInstance(); 