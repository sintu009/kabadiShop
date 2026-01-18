const express = require("express");
const router = express.Router();
const AdminController = require("./admin.controller");

/**
 * @swagger
 * /admins/create:
 *   post:
 *     summary: Create admin user
 *     description: Create a new admin account with login credentials
 *     tags: [Admins]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *               - name
 *               - phone
 *             properties:
 *               username:
 *                 type: string
 *                 example: admin2
 *               password:
 *                 type: string
 *                 example: Admin@123
 *               name:
 *                 type: string
 *                 example: Admin Two
 *               email:
 *                 type: string
 *                 example: admin2@mail.com
 *               phone:
 *                 type: string
 *                 example: "9876543210"
 *               address:
 *                 type: string
 *                 example: Bangalore
 *               gstNumber:
 *                 type: string
 *                 example: GST1234
 *               panNumber:
 *                 type: string
 *                 example: PAN1234
 *     responses:
 *       201:
 *         description: Admin created successfully
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden (Admin only)
 */

router.post("/create", AdminController.createAdmin);

module.exports = router;
