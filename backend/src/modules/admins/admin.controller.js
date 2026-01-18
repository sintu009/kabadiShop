const AdminService = require("./admin.service");

class AdminController {
  static async createAdmin(req, res) {
    try {
      const adminId = await AdminService.createAdmin(req.body);

      res.status(201).json({
        success: true,
        message: "Admin created successfully",
        adminId,
      });
    } catch (err) {
      res.status(400).json({
        success: false,
        message: err.message,
      });
    }
  }
}

module.exports = AdminController;
