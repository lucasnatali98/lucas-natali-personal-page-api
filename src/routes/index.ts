import { Router } from "express";

import { postRoutes } from "./post.routes";
import { newsletterRoutes } from "./newsletter.routes";
import { projectRoutes } from "./project.routes";
import { tagRoutes } from "./tag.routes";
import { categoryRoutes } from "./category.routes";

const router = Router();

router.use("/posts", postRoutes);
router.use("/newsletter", newsletterRoutes);
router.use("/project", projectRoutes);
router.use('/tag', tagRoutes);
router.use('/category', categoryRoutes);

export { router };
