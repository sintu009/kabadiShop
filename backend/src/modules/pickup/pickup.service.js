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
}

module.exports = PickupService;
