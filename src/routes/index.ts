import { Router } from "express";

import { postRoutes } from "./post.routes";
import { newsletterRoutes } from "./newsletter.routes";
import { projectRoutes } from "./project.routes";

const router = Router();

router.use("/posts", postRoutes);
router.use("/newsletter", newsletterRoutes);
router.use("/project", projectRoutes);

export { router };
