import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config()

class DatabaseConnection {
  private static instance: DatabaseConnection;
  private prisma: PrismaClient;

  private constructor() {
    const databaseUrl = process.env.DATABASE_URL ?? null
    if(!databaseUrl){
      throw new Error('Não foi informado valor para <DATABASE_URL> no arquivo de configuração')
    }
    this.prisma = new PrismaClient({
      datasources: {
        db: {
          url: databaseUrl,
        },
      },
    });
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