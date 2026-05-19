import { IEntity } from "../interfaces/IEntity";

export interface IProject extends IEntity {
  name: string;
  description: string;
  imageUrl?: string | null;
  url?: string | null;
  tag: string;
  label: string;
  cover: string;
  techs: string[];
}

export class Project {
  id: string;
  name: string;
  description: string;
  imageUrl?: string | null;
  url?: string | null;
  tag: string;
  label: string;
  cover: string;
  techs: string[];
  createdAt: Date;
  updatedAt: Date;

  constructor(project: Omit<IProject, "createdAt" | "updatedAt">) {
    this.id = project.id;
    this.name = project.name;
    this.description = project.description;
    this.imageUrl = project.imageUrl;
    this.url = project.url;
    this.tag = project.tag;
    this.label = project.label;
    this.cover = project.cover;
    this.techs = project.techs;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
