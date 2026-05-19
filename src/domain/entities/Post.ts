import { IEntity } from '../interfaces/IEntity';

export interface IPost extends IEntity {
  title: string;
  content: string;
  excerpt?: string | null;
  readTime?: string | null;
  slug: string;
  published: boolean;
  authorId: string;
  categoryId?: string | null;
  tagId?: string | null;
}

export class Post implements IPost {
  id: string;
  title: string;
  content: string;
  excerpt?: string | null;
  readTime?: string | null;
  slug: string;
  published: boolean;
  authorId: string;
  categoryId?: string | null;
  tagId?: string | null;
  createdAt: Date;
  updatedAt: Date;

  constructor(props: Omit<IPost, 'id' | 'createdAt' | 'updatedAt'>) {
    this.id = crypto.randomUUID();
    this.title = props.title;
    this.content = props.content;
    this.excerpt = props.excerpt;
    this.readTime = props.readTime;
    this.slug = props.slug;
    this.published = props.published;
    this.authorId = props.authorId;
    this.categoryId = props.categoryId;
    this.tagId = props.tagId;
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
}
