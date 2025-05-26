import { Router } from "express";
import { container } from "../infrastructure/container";
import { authMiddleware } from "../presentation/middlewares/auth.middleware";

import { ProjectController } from "@/presentation/controllers/project.controller";

const router = Router();
const projectController =
  container.resolve<ProjectController>("ProjectController");

router.get("/find-all", projectController.findAll.bind(projectController));

router.get(
  "/find-by-id/:id",
  projectController.findById.bind(projectController)
);

// Create new post
router.post(
  "/create-project",
  authMiddleware,
  projectController.create.bind(projectController)
);

// Update post
router.patch(
  "/update-project/:id",
  authMiddleware,
  projectController.update.bind(projectController)
);

export { router as projectRoutes };
