import { IEntity } from "../interfaces/IEntity";

export interface IProject extends IEntity {
  name: string;
  description: string;
  imageUrl: string;
  url: string;
}

export class Project {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  url: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(project: Omit<IProject, "createdAt" | "updatedAt">) {
    this.id = project.id;
    this.name = project.name;
    this.description = project.description;
    this.imageUrl = project.imageUrl;
    this.url = project.url;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
