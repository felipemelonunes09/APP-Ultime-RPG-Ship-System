const shipService = require('./ship.service');

class ShipController {
    async save(req, res) {
        const result = await shipService.save(req.body);
        res.status(result.code).send(result)
    }

    async findById(req, res) {
        const id = req.params.id;
        const result = await shipService.findById(id);

        res.status(result.code).send(result);
    }

    async findAll(req, res) {
        const result = await shipService.findAll();
        res.status(result.code).send(result);
    }

    async delete(req, res) {
        const id = req.params.id;
        const result = await shipService.delete(id);

        res.status(result.code).send(result);
    }

    async update(req, res) {
        const id = req.params.id;
        const data = req.body;

        const result = await shipService.update(id, data);
        res.status(result.code).send(result);
    }
}

module.exports = new ShipController;
