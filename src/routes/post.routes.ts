import { Router } from "express";
import { container } from "../infrastructure/container";
import { authMiddleware } from "../presentation/middlewares/auth.middleware";
import { PostController } from "../presentation/controllers/post.controller";

const router = Router();
const postController = container.resolve<PostController>("PostController");

router.get("/find-all", postController.findAll.bind(postController));

router.get("/find-by-id/:id", postController.findById.bind(postController));

// Create new post
router.post(
  "/create-post",
  authMiddleware,
  postController.create.bind(postController)
);

// Update post
router.patch(
  "/update-post/:id",
  authMiddleware,
  postController.update.bind(postController)
);

// Delete post
router.delete(
  "/delete/:id",
  authMiddleware,
  postController.delete.bind(postController)
);

// Get posts by author ID
router.get(
  "/find-by-author/:authorId",
  authMiddleware,
  postController.findByAuthorId.bind(postController)
);

export { router as postRoutes };
