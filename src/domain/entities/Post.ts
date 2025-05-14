import { IEntity } from '../interfaces/IEntity';

export interface IPost extends IEntity {
  title: string;
  content: string;
  slug: string;
  published: boolean;
  authorId: string;
  categories: string[];
  tags: string[];
}

export class Post implements IPost {
  id: string;
  title: string;
  content: string;
  slug: string;
  published: boolean;
  authorId: string;
  categories: string[];
  tags: string[];
  createdAt: Date;
  updatedAt: Date;

  constructor(props: Omit<IPost, 'id' | 'createdAt' | 'updatedAt'>) {
    Object.assign(this, props);
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  public publish(): void {
    this.published = true;
    this.updatedAt = new Date();
  }

  public unpublish(): void {
    this.published = false;
    this.updatedAt = new Date();
  }

  public updateContent(content: string): void {
    this.content = content;
    this.updatedAt = new Date();
  }

  public updateTitle(title: string): void {
    this.title = title;
    this.updatedAt = new Date();
  }

  public addCategory(categoryId: string): void {
    if (!this.categories.includes(categoryId)) {
      this.categories.push(categoryId);
      this.updatedAt = new Date();
    }
  }

  public addTag(tagId: string): void {
    if (!this.tags.includes(tagId)) {
      this.tags.push(tagId);
      this.updatedAt = new Date();
    }
  }
} 