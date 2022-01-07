

export interface IService { 

    getAll() : any
    getById(id: Number): any 
    add(data: any) : any
    update(data: any): any
    delete(id: Number): any

}