import { Router } from "express";

import { postRoutes } from "./post.routes";
import { newsletterRoutes } from "./newsletter.routes";

const router = Router();

router.use("/posts", postRoutes);
router.use("/newsletter", newsletterRoutes);

export { router };
