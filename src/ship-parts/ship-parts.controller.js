const shipPartsService = require('./ship-parts.service')

class ShipPartsController {

    async save(req, res) {
        const result = await shipPartsService.save(req.body);
        res.status(result.code).send(result);
    }

    async findById(req, res) {

        const id = req.params.id;
        const result = await shipPartsService.findById(id);

        res.status(result.code).send(result);
    }

    async findAll(req, res) {
        const result = await shipPartsService.findAll();
        res.status(result.code).send(result);
    }

    async delete(req, res) {
        
        const id = req.params.id;
        const result = await shipPartsService.delete(id);
        
        res.status(result.code).send(result);
    }

    async update(req, res) {
        await shipPartsService.update(shipParts);
    } 
}

module.exports = new ShipPartsController;