const SqlHelper = require("../../config/sqlHelper");

class PickupService {
  static async create(data, createdBy) {
    const result = await SqlHelper.callSP("sp_pickup_request_create", [
      data.user_id,
      data.garbage_type_id,
      data.estimated_weight || null,
      data.unit,
      data.price_at_request,
      data.total_amount,
      data.address,
      data.latitude || null,
      data.longitude || null,
      data.image || null,
      createdBy,
    ]);

    return result[0][0].pickup_request_id;
  }

  static async getAll() {
    return SqlHelper.getAll("sp_pickup_request_get_all", []);
  }

  static async getAssigned(scrapCollectorId) {
    return SqlHelper.getAll("sp_collector_assigned_pickups", [
      scrapCollectorId,
    ]);
  }

  static async updateStatus(scrapCollectorId, pickupRequestId, status) {
    await SqlHelper.execute("sp_collector_update_pickup_status", [
      pickupRequestId,
      status,
      scrapCollectorId,
    ]);
  }

  static async completePickup(scrapCollectorId, pickupRequestId, image, user) {
    await SqlHelper.execute("sp_pickup_complete_and_wallet_debit", [
      pickupRequestId,
      scrapCollectorId,
      image,
      user,
    ]);
  }

  static async createGuestUser(name, phone) {
    const result = await SqlHelper.callSP("sp_guest_user_create", [
      name,
      phone,
    ]);

    return result[0][0].user_id;
  }

  static async createPickup(data, userId) {
    const result = await SqlHelper.callSP("sp_pickup_request_create", [
      userId,
      data.garbage_type_id,
      data.estimated_weight || null,
      data.unit,
      data.price_at_request,
      data.total_amount,
      data.address,
      data.latitude || null,
      data.longitude || null,
      data.image || null,
      "GUEST",
    ]);

    return result[0][0].pickup_request_id;
  }
}

module.exports = PickupService;
