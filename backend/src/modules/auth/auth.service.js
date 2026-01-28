const SqlHelper = require("../../config/sqlHelper.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class AuthService {
  static async login(username, password) {
    console.log("AuthService.login called with:", username, password);
    const user = await SqlHelper.getOne("sp_auth_get_by_username", [username]);
    console.log("AuthService.login called with:", user.password_hash);
    if (!user) {
      throw new Error("Invalid username or password");
    }

    if (!user.is_active) {
      throw new Error("Account is disabled");
    }

    const isValid = await bcrypt.compare(password, user.password_hash);

    if (!isValid) {
      throw new Error("Invalid username or password");
    }

    const token = jwt.sign(
      {
        id: user.id,
        username: user.username,
        role: user.role,
        user_id: user.user_id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRES_IN,
      },
    );

    return {
      token,
      user: {
        id: user.id,
        username: user.username,
        role: user.role,
        user_id: user.user_id,
      },
    };
  }

  static async resetPasswordByRoleAndPhone(
    role,
    phoneNumber,
    passwordHash,
    salt,
    resetBy,
  ) {
    await SqlHelper.callSP("sp_auth_reset_password_by_phone_and_role", [
      role,
      phoneNumber,
      passwordHash,
      salt,
      resetBy,
    ]);
  }
}

module.exports = AuthService;
