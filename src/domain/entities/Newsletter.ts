import { IEntity } from '../interfaces/IEntity';

export interface INewsletter extends IEntity {
  email: string;
  userId: string;
  active: boolean;
}

export class Newsletter implements INewsletter {
  id: string;
  email: string;
  userId: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;

  constructor(props: Omit<INewsletter, 'id' | 'createdAt' | 'updatedAt'>) {
    Object.assign(this, props);
    this.email = props.email;
    this.userId = props.userId;
    this.active = props.active;
    this.id = crypto.randomUUID(); //TODO: avaliar se isso faz sentido
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  public activate(): void {
    this.active = true;
    this.updatedAt = new Date();
  }

  public deactivate(): void {
    this.active = false;
    this.updatedAt = new Date();
  }

  public updateEmail(email: string): void {
    this.email = email;
    this.updatedAt = new Date();
  }
} 