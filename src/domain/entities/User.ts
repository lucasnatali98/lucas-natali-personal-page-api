import { IEntity } from '../interfaces/IEntity';

export enum UserRole {
  USER = 'USER',
  ADMIN = 'ADMIN'
}

export interface IUser extends IEntity {
  email: string;
  name: string;
  password: string;
  role: UserRole;
}

export class User implements IUser {
  id: string;
  email: string;
  name: string;
  password: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;

  constructor(props: Omit<IUser, 'id' | 'createdAt' | 'updatedAt'>) {
    Object.assign(this, props);
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  public updateName(name: string): void {
    this.name = name;
    this.updatedAt = new Date();
  }

  public updatePassword(password: string): void {
    this.password = password;
    this.updatedAt = new Date();
  }

  public updateRole(role: UserRole): void {
    this.role = role;
    this.updatedAt = new Date();
  }

  public isAdmin(): boolean {
    return this.role === UserRole.ADMIN;
  }
} 