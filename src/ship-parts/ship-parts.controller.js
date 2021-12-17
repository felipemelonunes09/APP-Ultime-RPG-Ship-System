const shipPartsService = require('./ship-parts.service')

class ShipPartsController {

    async save(req, res) {
        await shipPartsService.save(req.body);
        res.send('Ok')
    }

    async findById(req, res) {
        await shipPartsService.findById(id);
    }

    async delete(req, res) {
        await shipPartsService.delete(shipParts);
    }

    async update(req, res) {
        await shipPartsService.update(shipParts);
    } 
}

module.exports = new ShipPartsController;