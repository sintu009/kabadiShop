const PickupService = require("./pickup.service");

class PickupController {
  static async create(req, res) {
    const id = await PickupService.create(
      req.body,
      req.user ? req.user.username : "GUEST",
    );

    res.status(201).json({
      success: true,
      message: "Pickup request created",
      id,
    });
  }

  static async getAll(req, res) {
    const data = await PickupService.getAll();

    res.json({
      success: true,
      data,
    });
  }
}

module.exports = PickupController;
