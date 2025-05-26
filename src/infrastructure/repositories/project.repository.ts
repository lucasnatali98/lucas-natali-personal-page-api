import { Project } from "@/domain/entities/Project";
import { BaseRepository } from "./base.repository";

export class ProjectRepository extends BaseRepository<Project> {
  constructor() {
    super("project");
  }
}
