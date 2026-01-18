const express = require("express");

const authRoutes = require("../modules/auth/auth.routes");
const userRoutes = require("../modules/users/user.routes");
const adminRoutes = require("../modules/admins/admin.routes");
const scrapCollectorRoutes = require("../modules/scrapCollectors/scrapCollector.routes");

const router = express.Router();

/* ===============================
   ROUTE MAPPING
================================ */
router.use("/auth", authRoutes);
router.use("/admin", adminRoutes);
router.use("/users", userRoutes);
router.use("/scrap-collectors", scrapCollectorRoutes);

module.exports = router;
