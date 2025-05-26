import { JobExperience } from "@/domain/entities/JobExperience";
import { BaseRepository } from "./base.repository";

export class JobExperienceRepository extends BaseRepository<JobExperience> {
  constructor() {
    super("jobExperience");
  }
}
