
const cannonService = require('./cannon.service')

class CannonController {

    async save(req, res) {
        await cannonService.save(req.body);
        res.send('Ok')
    }

    async findById(req, res) {
        await cannonService.findById(id);
    }

    async delete(req, res) {
        await cannonService.delete(cannon);
    }

    async update(req, res) {
        await cannonService.update(cannon);
    } 
}

module.exports = new CannonController;