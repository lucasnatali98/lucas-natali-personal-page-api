import { Router, Request, Response } from "express";
import { container } from "infrastructure/container";
import { NewsletterController } from "presentation/controllers/newsletter.controller";

const jobExperienceRoutes = Router();

const newsletterController = container.resolve<NewsletterController>(
  "NewsletterController"
);

jobExperienceRoutes.get("/find-all", async (req: Request, res: Response) => {});
jobExperienceRoutes.post("/create", async (req: Request, res: Response) => {});

export { jobExperienceRoutes };
