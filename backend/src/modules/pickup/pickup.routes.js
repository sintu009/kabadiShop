const express = require("express");
const router = express.Router();

const auth = require("../../middlewares/auth.middleware");
const role = require("../../middlewares/role.middleware");
const PickupController = require("./pickup.controller");

/**
 * @swagger
 * tags:
 *   name: PickupRequests
 *   description: Pickup request management
 */

/**
 * @swagger
 * /pickup-requests:
 *   post:
 *     summary: Create pickup request
 *     tags: [PickupRequests]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - user_id
 *               - garbage_type_id
 *               - unit
 *               - price_at_request
 *               - total_amount
 *             properties:
 *               user_id:
 *                 type: integer
 *                 example: 1
 *               garbage_type_id:
 *                 type: integer
 *                 example: 2
 *               estimated_weight:
 *                 type: number
 *                 example: 5
 *               unit:
 *                 type: string
 *                 enum: [KG, PIECE]
 *               price_at_request:
 *                 type: number
 *                 example: 15
 *               total_amount:
 *                 type: number
 *                 example: 75
 *               address:
 *                 type: string
 *                 example: Bangalore, Whitefield
 *               latitude:
 *                 type: number
 *                 example: 12.9716
 *               longitude:
 *                 type: number
 *                 example: 77.5946
 *               image:
 *                 type: string
 *                 example: image.jpg
 *     responses:
 *       201:
 *         description: Pickup request created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 id:
 *                   type: integer
 */
router.post("/", PickupController.create);

/**
 * @swagger
 * /pickup-requests:
 *   get:
 *     summary: Get all pickup requests
 *     tags: [PickupRequests]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of pickup requests
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       user_name:
 *                         type: string
 *                       garbage_type:
 *                         type: string
 *                       estimated_weight:
 *                         type: number
 *                       unit:
 *                         type: string
 *                       total_amount:
 *                         type: number
 *                       status:
 *                         type: string
 */
router.get("/", auth, role("ADMIN"), PickupController.getAll);

module.exports = router;
