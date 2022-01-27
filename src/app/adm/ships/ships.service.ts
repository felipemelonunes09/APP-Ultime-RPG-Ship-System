import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ServiceModel } from "src/app/shared/utils/service-model";

@Injectable({ 
    providedIn: 'root'
})
export class ShipService extends ServiceModel {
    constructor(private partHttp: HttpClient) {
        super(partHttp);
        this.routeName = 'ship';
    }
}