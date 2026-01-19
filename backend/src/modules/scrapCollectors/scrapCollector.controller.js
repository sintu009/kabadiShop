const ScrapCollectorService = require("./scrapCollector.service");

class ScrapCollectorController {
  static async create(req, res) {
    const id = await ScrapCollectorService.create(req.body, req.user.username);

    res.status(201).json({
      success: true,
      message: "Scrap collector created",
      id,
    });
  }

  static async getAll(req, res) {
    const page = Number(req.query.page || 1);
    const limit = Number(req.query.limit || 10);

    const result = await ScrapCollectorService.getAll(page, limit);

    res.json({ success: true, ...result });
  }

  static async getById(req, res) {
    const data = await ScrapCollectorService.getById(req.params.id);

    if (!data) {
      return res.status(404).json({ success: false, message: "Not found" });
    }

    res.json({ success: true, data });
  }

  static async update(req, res) {
    await ScrapCollectorService.update(
      req.params.id,
      req.body,
      req.user.username,
    );

    res.json({ success: true, message: "Updated successfully" });
  }

  static async softDelete(req, res) {
    await ScrapCollectorService.softDelete(req.params.id, req.user.username);

    res.json({ success: true, message: "Deleted successfully" });
  }

  static async dropdown(req, res) {
    const data = await ScrapCollectorService.getDropdown();

    res.json({
      success: true,
      data,
    });
  }

  static async getAssigned(req, res) {
    const data = await ScrapCollectorController.getAssigned(
      req.user.scrap_collector_id,
    );

    res.json({
      success: true,
      data,
    });
  }

  static async updateStatus(req, res) {
    await ScrapCollectorController.updateStatus(
      req.user.scrap_collector_id,
      req.params.pickupRequestId,
      req.body.status,
    );

    res.json({
      success: true,
      message: "Pickup status updated",
    });
  }
}

module.exports = ScrapCollectorController;
