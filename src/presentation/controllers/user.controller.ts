import { Request, Response } from 'express';
import { injectable, inject } from 'tsyringe';
import { BaseController } from './base.controller';
import { UserRepository } from '../../infrastructure/repositories/user.repository';
import { CreateUserDto, UpdateUserDto, LoginUserDto } from '../dtos/user.dto';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

@injectable()
export class UserController extends BaseController {
  constructor(
    @inject('UserRepository')
    private userRepository: UserRepository
  ) {
    super();
  }

  async create(req: Request, res: Response): Promise<Response> {
    try {
      const data = CreateUserDto.parse(req.body);
      const hashedPassword = await bcrypt.hash(data.password, 10);
      
      const user = await this.userRepository.create({
        ...data,
        password: hashedPassword
      });

      return this.sendSuccess(res, user, 201);
    } catch (error) {
      return this.sendError(res, error as Error);
    }
  }

  async login(req: Request, res: Response): Promise<Response> {
    try {
      const { email, password } = LoginUserDto.parse(req.body);
      
      const user = await this.userRepository.findByEmail(email);
      if (!user) {
        throw new Error('User not found');
      }

      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        throw new Error('Invalid password');
      }

      const token = jwt.sign(
        { id: user.id, email: user.email, role: user.role },
        process.env.JWT_SECRET || 'default_secret',
        { expiresIn: '1d' }
      );

      return this.sendSuccess(res, { token });
    } catch (error) {
      return this.sendError(res, error as Error);
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const data = UpdateUserDto.parse(req.body);

      if (data.password) {
        data.password = await bcrypt.hash(data.password, 10);
      }

      const user = await this.userRepository.update(id, data);
      return this.sendSuccess(res, user);
    } catch (error) {
      return this.sendError(res, error as Error);
    }
  }

  async findById(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const user = await this.userRepository.findById(id);
      
      if (!user) {
        throw new Error('User not found');
      }

      return this.sendSuccess(res, user);
    } catch (error) {
      return this.sendError(res, error as Error);
    }
  }

  async findAll(req: Request, res: Response): Promise<Response> {
    try {
      const users = await this.userRepository.findAll();
      return this.sendSuccess(res, users);
    } catch (error) {
      return this.sendError(res, error as Error);
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      await this.userRepository.delete(id);
      return this.sendSuccess(res, { message: 'User deleted successfully' });
    } catch (error) {
      return this.sendError(res, error as Error);
    }
  }
} 