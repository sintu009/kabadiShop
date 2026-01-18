const AuthService = require("./auth.service.js");

class AuthController {
  static async login(req, res) {
    try {
      const { username, password } = req.body;

      if (!username || !password) {
        return res.status(400).json({
          success: false,
          message: "Username and password are required",
        });
      }

      const result = await AuthService.login(username, password);

      res.status(200).json({
        success: true,
        message: "Login successful",
        data: result,
      });
    } catch (err) {
      res.status(401).json({
        success: false,
        message: err.message,
      });
    }
  }
}

module.exports = AuthController;
