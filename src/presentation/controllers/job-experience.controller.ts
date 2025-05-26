import { JobExperienceRepository } from "@/infrastructure/repositories/job-experience.repository";
import { injectable, inject } from "tsyringe";
import { BaseController } from "./base.controller";
import { Request, Response } from "express";

@injectable()
export class JobExperienceController extends BaseController {
  constructor(
    @inject("JobExperienceRepository")
    private readonly _jobExperienceRepository: JobExperienceRepository
  ) {
    super();
  }

  async create(req: Request, res: Response): Promise<Response> {
    try {
      const data = req.body; // Assuming the request body is already validated
      const jobExperience = await this._jobExperienceRepository.create(data);
      return this.sendSuccess(res, jobExperience, 201);
    } catch (error) {
      return this.sendError(res, error as Error);
    }
  }
  async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const jobExperiences = await this._jobExperienceRepository.findAll();
      return this.sendSuccess(res, jobExperiences);
    } catch (error) {
      return this.sendError(res, error as Error);
    }
  }
}
