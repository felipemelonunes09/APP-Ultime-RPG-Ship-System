
const cannonService = require('./cannon.service')

class CannonController {

    async save(req, res) {
        const result = await cannonService.save(req.body);
        res.status(result.code).send(result)
    }

    async findById(req, res) {
        
        const id = req.params.id
        const result = await cannonService.findById(id);
        
        res.status(result.code).send(result)
    }

    async findAll(req, res) {
        const result = await cannonService.findAll();
        res.status(result.code).send(result)
    }

    async delete(req, res) {
        await cannonService.delete(cannon);
    }

    async update(req, res) {
        await cannonService.update(cannon);
    } 
}

module.exports = new CannonController;