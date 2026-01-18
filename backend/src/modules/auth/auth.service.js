const SqlHelper = require("../../config/sqlHelper.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class AuthService {
  static async login(username, password) {
    // 1️⃣ Fetch user
    const user = await SqlHelper.getOne("sp_auth_get_by_username", [username]);

    if (!user) {
      throw new Error("Invalid username or password");
    }

    if (!user.is_active) {
      throw new Error("Account is disabled");
    }

    // 2️⃣ Verify password
    const isValid = await bcrypt.compare(password, user.password_hash);

    if (!isValid) {
      throw new Error("Invalid username or password");
    }

    // 3️⃣ Generate JWT
    const token = jwt.sign(
      {
        id: user.id,
        username: user.username,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRES_IN,
      }
    );

    return {
      token,
      user: {
        id: user.id,
        username: user.username,
        role: user.role,
      },
    };
  }
}

module.exports = AuthService;
