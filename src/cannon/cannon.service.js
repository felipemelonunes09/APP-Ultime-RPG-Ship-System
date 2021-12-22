const HTTP = require('../utils/statusHTTP');
const Cannon = require('./models/cannon.model')


class CannonService { 
    
    async findById(id) {
        try {
            return  { ...HTTP.ok(), object: await Cannon.findById(id) }
        }
        catch(e) {
            return HTTP.internalServer()            
        }
    } 

    async findAll() {
        try {
            return { ...HTTP.ok(), objects: await Cannon.find() }
        }
        catch(e) { 
            console.log(e)
            return HTTP.internalServer()
        }       
    }

    async save(data) {
        
        const cannon = new Cannon(data);
        const error = cannon.validateSync()

        if (error) 
            return HTTP.badRequest(error.message)

        try {
            cannon.save();
            return HTTP.created('Cannon created');
        }
        catch (e) {
            return HTTP.internalServer();
        }
    }

    async delete(id) {
        try {
            const obj = (await this.findById(id)).object;
            return { ...HTTP.ok(), result: await Cannon.deleteOne(obj) }
        }
        catch(e) {
            console.log(e)
            return HTTP.internalServer()
        }
    }

    async update(id, data) {
        try {
            return { ...HTTP.ok(), result: await Cannon.findOneAndUpdate({ id: id }, data ) }
        }
        catch (e) {
            return HTTP.internalServer();
        }
    }
}

module.exports = new CannonService()