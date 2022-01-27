import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ServiceModel } from "src/app/shared/utils/service-model";


@Injectable({ 
    providedIn: 'root'
})
export class PartsService extends ServiceModel {
    
    private _ranking = ['SS', 'S', 'A', 'B', 'C', 'D', 'E'] 

    constructor(private partHttp: HttpClient) {
        super(partHttp);
        this.routeName = 'ship-part';
    }

    get ranking(){
        return this._ranking
    }
    
}