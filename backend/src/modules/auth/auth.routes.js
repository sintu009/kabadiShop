const express = require("express");
const router = express.Router();

const AuthController = require("../auth/auth.controller.js");

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentication management
 */

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [username, password]
 *             properties:
 *               username:
 *                 type: string
 *                 example: "9876543210"
 *               password:
 *                 type: string
 *                 example: "User@123"
 *     responses:
 *       200:
 *         description: Login success
 *       401:
 *         description: Invalid credentials
 */

router.post("/login", AuthController.login);

router.post("/reset-password", AuthController.resetPassword);

module.exports = router;
