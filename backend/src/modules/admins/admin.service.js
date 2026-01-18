const SqlHelper = require("../../config/sqlHelper");
const bcrypt = require("bcrypt");

class AdminService {
  static async createAdmin(data, createdBy = "Super Admin") {
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(data.password, salt);

    const out = await SqlHelper.callSPWithOut(
      "sp_admin_create",
      [
        data.username,
        passwordHash,
        salt,
        data.name,
        data.email,
        data.phone,
        data.address,
        data.gstNumber,
        data.panNumber,
        createdBy,
      ],
      ["o_admin_id"]
    );

    return out.o_admin_id;
  }
}

module.exports = AdminService;
