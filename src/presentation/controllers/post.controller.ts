import { Request, Response } from 'express';
import { injectable, inject } from 'tsyringe';
import { BaseController } from './base.controller';
import { PostRepository } from '../../infrastructure/repositories/post.repository';
import { CreatePostDto, UpdatePostDto } from '../dtos/post.dto';

@injectable()
export class PostController extends BaseController {
  constructor(
    @inject('PostRepository')
    private postRepository: PostRepository
  ) {
    super();
  }

  async create(req: Request, res: Response): Promise<Response> {
    try {
      const data = CreatePostDto.parse(req.body);
      const post = await this.postRepository.create({
        ...data,
        authorId: req.user.id // Assuming we have authentication middleware
      });

      return this.sendSuccess(res, post, 201);
    } catch (error) {
      return this.sendError(res, error as Error);
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const data = UpdatePostDto.parse(req.body);
      
      const post = await this.postRepository.findById(id);
      if (!post) {
        throw new Error('Post not found');
      }

      if (post.authorId !== req.user.id && req.user.role !== 'ADMIN') {
        throw new Error('Unauthorized');
      }

      const updatedPost = await this.postRepository.update(id, data);
      return this.sendSuccess(res, updatedPost);
    } catch (error) {
      return this.sendError(res, error as Error);
    }
  }

  async findById(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const post = await this.postRepository.findById(id);
      
      if (!post) {
        throw new Error('Post not found');
      }

      return this.sendSuccess(res, post);
    } catch (error) {
      return this.sendError(res, error as Error);
    }
  }

  async findAll(req: Request, res: Response): Promise<Response> {
    try {
      const posts = await this.postRepository.findAll();
      return this.sendSuccess(res, posts);
    } catch (error) {
      return this.sendError(res, error as Error);
    }
  }

  async findByAuthorId(req: Request, res: Response): Promise<Response> {
    try {
      const { authorId } = req.params;
      const posts = await this.postRepository.findByAuthorId(authorId);
      return this.sendSuccess(res, posts);
    } catch (error) {
      return this.sendError(res, error as Error);
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      
      const post = await this.postRepository.findById(id);
      if (!post) {
        throw new Error('Post not found');
      }

      if (post.authorId !== req.user.id && req.user.role !== 'ADMIN') {
        throw new Error('Unauthorized');
      }

      await this.postRepository.delete(id);
      return this.sendSuccess(res, { message: 'Post deleted successfully' });
    } catch (error) {
      return this.sendError(res, error as Error);
    }
  }
} 