import { Request, Response } from "express";
import { injectable, inject } from "tsyringe";
import { BaseController } from "./base.controller";
import { ProjectRepository } from "../../infrastructure/repositories/project.repository";
import { CreateProjectDto, UpdateProjectDto } from "../dtos/project.dto";

@injectable()
export class ProjectController extends BaseController {
  constructor(
    @inject("ProjectRepository")
    private projectRepository: ProjectRepository
  ) {
    super();
  }

  async create(req: Request, res: Response): Promise<Response> {
    try {
      const data = CreateProjectDto.parse(req.body);
      const project = await this.projectRepository.create({
        ...data,
      });

      return this.sendSuccess(res, project, 201);
    } catch (error) {
      return this.sendError(res, error as Error);
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const data = UpdateProjectDto.parse(req.body);

      const project = await this.projectRepository.findById(id);
      if (!project) {
        throw new Error("Project not found");
      }

      const updatedProject = await this.projectRepository.update(id, data);
      return this.sendSuccess(res, updatedProject);
    } catch (error) {
      return this.sendError(res, error as Error);
    }
  }

  async findById(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const project = await this.projectRepository.findById(id);

      if (!project) {
        throw new Error("Project not found");
      }

      return this.sendSuccess(res, project);
    } catch (error) {
      return this.sendError(res, error as Error);
    }
  }

  async findAll(req: Request, res: Response): Promise<Response> {
    try {
      const posts = await this.projectRepository.findAll();
      return this.sendSuccess(res, posts);
    } catch (error) {
      return this.sendError(res, error as Error);
    }
  }
}
