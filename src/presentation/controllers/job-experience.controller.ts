import { injectable, inject } from "tsyringe";
import { BaseController } from "./base.controller";
import { Request, Response } from "express";
import { JobExperienceRepository } from "../../infrastructure/repositories/job-experience.repository";
import {
  CreateJobExperienceDto,
  UpdateJobExperienceDto,
} from "../dtos/job-experience.dto";

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
      const data = CreateJobExperienceDto.parse(req.body);
      const jobExperience = await this._jobExperienceRepository.create(data);
      return this.sendSuccess(res, jobExperience, 201);
    } catch (error) {
      return this.sendError(res, error as Error);
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const data = UpdateJobExperienceDto.parse(req.body);
      const existing = await this._jobExperienceRepository.findById(id);
      if (!existing) throw new Error("JobExperience not found");
      const updated = await this._jobExperienceRepository.update(id, data);
      return this.sendSuccess(res, updated);
    } catch (error) {
      return this.sendError(res, error as Error);
    }
  }

  async findAll(req: Request, res: Response): Promise<Response> {
    try {
      const jobExperiences = await this._jobExperienceRepository.findAll();
      return this.sendSuccess(res, jobExperiences);
    } catch (error) {
      return this.sendError(res, error as Error);
    }
  }

  async findById(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const jobExperience = await this._jobExperienceRepository.findById(id);
      if (!jobExperience) throw new Error("JobExperience not found");
      return this.sendSuccess(res, jobExperience);
    } catch (error) {
      return this.sendError(res, error as Error);
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const existing = await this._jobExperienceRepository.findById(id);
      if (!existing) throw new Error("JobExperience not found");
      await this._jobExperienceRepository.delete(id);
      return this.sendSuccess(res, { message: "JobExperience deleted" });
    } catch (error) {
      return this.sendError(res, error as Error);
    }
  }
}
