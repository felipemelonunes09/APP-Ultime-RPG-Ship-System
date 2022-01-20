import { Injectable } from "@angular/core";

@Injectable({ 
    providedIn: 'root'
})
export class DataModelService {
    private _ranking = ['SS', 'S', 'A', 'B', 'C', 'D', 'E'] 

    get ranking(){
        return this._ranking
    }
}