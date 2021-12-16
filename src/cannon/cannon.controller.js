
const cannonService = require('./cannon.service')

class CannonController {

    async save(cannon) {
        return await cannonService.save(cannon);
    }

    async findById(id) {
        return await cannonService.findById(id);
    }

    async delete(cannon) {
        return await cannonService.delete(cannon);
    }

    async update(cannon) {
        return await cannonService.update(cannon);
    } 
}

module.exports = new CannonController;