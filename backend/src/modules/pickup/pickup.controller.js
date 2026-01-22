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

  static async getAssigned(req, res) {
    const data = await PickupService.getAssigned(req.user.scrap_collector_id);

    res.json({
      success: true,
      data,
    });
  }

  static async updateStatus(req, res) {
    const { status, image } = req.body;
    const { pickupRequestId } = req.params;
    const scrapCollectorId = req.user.scrap_collector_id;
    const username = req.user.username;
    // COMPLETED = special business flow
    if (status === "COMPLETED") {
      await PickupService.completePickup(
        scrapCollectorId,
        pickupRequestId,
        image || null,
        username,
      );

      return res.json({
        success: true,
        message: "Pickup completed and wallet debited",
      });
    }

    await PickupService.updateStatus(
      scrapCollectorId,
      pickupRequestId,
      status,
      username,
    );

    res.json({
      success: true,
      message: "Pickup status updated",
    });
  }

  static async guestPickup(req, res) {
    const {
      name,
      phone,
      garbage_type_id,
      estimated_weight,
      unit,
      price_at_request,
      total_amount,
      address,
      latitude,
      longitude,
      image,
    } = req.body;

    // 1️⃣ Create / reuse guest user
    const userId = await PickupService.createGuestUser(name, phone);

    // 2️⃣ Create pickup request
    const pickupId = await PickupService.createPickup(
      {
        garbage_type_id,
        estimated_weight,
        unit,
        price_at_request,
        total_amount,
        address,
        latitude,
        longitude,
        image,
      },
      userId,
    );

    res.status(201).json({
      success: true,
      message: "Pickup request created",
      pickup_request_id: pickupId,
    });
  }
}

module.exports = PickupController;
