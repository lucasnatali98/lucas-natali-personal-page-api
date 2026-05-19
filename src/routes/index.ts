import { Router } from "express";

import { postRoutes } from "./post.routes";
import { newsletterRoutes } from "./newsletter.routes";
import { projectRoutes } from "./project.routes";
import { tagRoutes } from "./tag.routes";
import { categoryRoutes } from "./category.routes";
import { jobExperienceRoutes } from "./job-experience.routes";

const router = Router();

router.use("/posts", postRoutes);
router.use("/newsletter", newsletterRoutes);
router.use("/projects", projectRoutes);
router.use("/job-experiences", jobExperienceRoutes);
router.use("/tags", tagRoutes);
router.use("/categories", categoryRoutes);

export { router };
