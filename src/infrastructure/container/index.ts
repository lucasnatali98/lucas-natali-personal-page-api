import { container } from "tsyringe";
import { UserRepository } from "../repositories/user.repository";
import { PostRepository } from "../repositories/post.repository";
import { NewsletterRepository } from "../repositories/newsletter.repository";
import { UserController } from "../../presentation/controllers/user.controller";
import { PostController } from "../../presentation/controllers/post.controller";
import { NewsletterController } from "../../presentation/controllers/newsletter.controller";
import { JobExperienceRepository } from "../repositories/job-experience.repository";
import { JobExperienceController } from "@/presentation/controllers/job-experience.controller";
import { ProjectRepository } from "../repositories/project.repository";
import { ProjectController } from "@/presentation/controllers/project.controller";

// Register repositories
container.registerSingleton("UserRepository", UserRepository);
container.registerSingleton("PostRepository", PostRepository);
container.registerSingleton("NewsletterRepository", NewsletterRepository);
container.registerSingleton("JobExperienceRepository", JobExperienceRepository);
container.registerSingleton("ProjectRepository", ProjectRepository);

// Register controllers
container.registerSingleton("UserController", UserController);
container.registerSingleton("PostController", PostController);
container.registerSingleton("NewsletterController", NewsletterController);
container.registerSingleton("JobExperienceController", JobExperienceController);
container.registerSingleton("ProjectController", ProjectController);

export { container };
