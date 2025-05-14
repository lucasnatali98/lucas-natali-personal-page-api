import { Request, Response } from 'express';
import { injectable, inject } from 'tsyringe';
import { BaseController } from './base.controller';
import { NewsletterRepository } from '../../infrastructure/repositories/newsletter.repository';
import { CreateNewsletterDto, UpdateNewsletterDto } from '../dtos/newsletter.dto';

@injectable()
export class NewsletterController extends BaseController {
  constructor(
    @inject('NewsletterRepository')
    private newsletterRepository: NewsletterRepository
  ) {
    super();
  }

  async subscribe(req: Request, res: Response): Promise<Response> {
    try {
      const data = CreateNewsletterDto.parse(req.body);
      const existingSubscription = await this.newsletterRepository.findByEmail(data.email);

      if (existingSubscription) {
        throw new Error('Email already subscribed');
      }

      const newsletter = await this.newsletterRepository.create(data);
      return this.sendSuccess(res, newsletter, 201);
    } catch (error) {
      return this.sendError(res, error as Error);
    }
  }

  async unsubscribe(req: Request, res: Response): Promise<Response> {
    try {
      const { email } = req.params;
      const subscription = await this.newsletterRepository.findByEmail(email);

      if (!subscription) {
        throw new Error('Subscription not found');
      }

      await this.newsletterRepository.update(subscription.id, { active: false });
      return this.sendSuccess(res, { message: 'Successfully unsubscribed' });
    } catch (error) {
      return this.sendError(res, error as Error);
    }
  }

  async findAll(req: Request, res: Response): Promise<Response> {
    try {
      const subscriptions = await this.newsletterRepository.findAll();
      return this.sendSuccess(res, subscriptions);
    } catch (error) {
      return this.sendError(res, error as Error);
    }
  }

  async findByEmail(req: Request, res: Response): Promise<Response> {
    try {
      const { email } = req.params;
      const subscription = await this.newsletterRepository.findByEmail(email);

      if (!subscription) {
        throw new Error('Subscription not found');
      }

      return this.sendSuccess(res, subscription);
    } catch (error) {
      return this.sendError(res, error as Error);
    }
  }
} 