import { Router } from "express";
import { container } from "../infrastructure/container";
import { authMiddleware } from "../presentation/middlewares/auth.middleware";
import { JobExperienceController } from "../presentation/controllers/job-experience.controller";

const router = Router();
const jobExperienceController = container.resolve<JobExperienceController>(
  "JobExperienceController"
);

router.get(
  "/find-all",
  jobExperienceController.findAll.bind(jobExperienceController)
);

router.get(
  "/find-by-id/:id",
  jobExperienceController.findById.bind(jobExperienceController)
);

router.post(
  "/create",
  authMiddleware,
  jobExperienceController.create.bind(jobExperienceController)
);

router.patch(
  "/update/:id",
  authMiddleware,
  jobExperienceController.update.bind(jobExperienceController)
);

router.delete(
  "/delete/:id",
  authMiddleware,
  jobExperienceController.delete.bind(jobExperienceController)
);

export { router as jobExperienceRoutes };
