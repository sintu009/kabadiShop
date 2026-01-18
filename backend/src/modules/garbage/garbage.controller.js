const GarbageTypeService = require("./garbage.service");

class GarbageController {
  static async create(req, res) {
    const id = await GarbageTypeService.create(req.body, req.user.username);

    res.status(201).json({
      success: true,
      message: "Garbage type created",
      id,
    });
  }

  static async getAll(req, res) {
    const data = await GarbageTypeService.getAll();
    res.json({ success: true, data });
  }

  static async getById(req, res) {
    const data = await GarbageTypeService.getById(req.params.id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Garbage type not found",
      });
    }

    res.json({ success: true, data });
  }

  static async update(req, res) {
    await GarbageTypeService.update(req.params.id, req.body, req.user.username);

    res.json({
      success: true,
      message: "Garbage type updated",
    });
  }

  static async softDelete(req, res) {
    await GarbageTypeService.softDelete(req.params.id, req.user.username);

    res.json({
      success: true,
      message: "Garbage type deleted",
    });
  }
}

module.exports = GarbageController;
