import { Router } from "express";
import { container } from "../infrastructure/container";
import {
  authMiddleware,
  adminMiddleware,
} from "../presentation/middlewares/auth.middleware";
import { NewsletterController } from "../presentation/controllers/newsletter.controller";

const router = Router();
const newsletterController = container.resolve<NewsletterController>(
  "NewsletterController"
);
/**
 * @swagger
 * /newsletter/subscribe:
 *   post:
 *     summary: Subscribe to newsletter
 *     tags: [Newsletter]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               userId:
 *                 type: string
 *                 format: uuid
 *     responses:
 *       201:
 *         description: Successfully subscribed to newsletter
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   $ref: '#/components/schemas/Newsletter'
 *       400:
 *         description: Invalid input or already subscribed
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */

router.post(
  "/subscribe",
  authMiddleware,
  adminMiddleware,
  newsletterController.subscribe.bind(newsletterController)
);

/**
 * @swagger
 * /newsletter/{email}:
 *   get:
 *     summary: Get newsletter subscription by email
 *     tags: [Newsletter]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: email
 *         required: true
 *         schema:
 *           type: string
 *           format: email
 *         description: Subscriber email
 *     responses:
 *       200:
 *         description: Newsletter subscription details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   $ref: '#/components/schemas/Newsletter'
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       404:
 *         description: Subscription not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get(
  "/:email",
  authMiddleware,
  adminMiddleware,
  newsletterController.findByEmail.bind(newsletterController)
);

/**
 * @swagger
 * /newsletter/unsubscribe/{email}:
 *   post:
 *     summary: Unsubscribe from newsletter
 *     tags: [Newsletter]
 *     parameters:
 *       - in: path
 *         name: email
 *         required: true
 *         schema:
 *           type: string
 *           format: email
 *         description: Subscriber email
 *     responses:
 *       200:
 *         description: Successfully unsubscribed from newsletter
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: object
 *                   properties:
 *                     message:
 *                       type: string
 *       404:
 *         description: Subscription not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.post(
  "/unsubscribe",
  newsletterController.unsubscribe.bind(newsletterController)
);

export { router as newsletterRoutes };
