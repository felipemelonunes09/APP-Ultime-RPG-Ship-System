import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Part } from "src/app/shared/models/parts.model";
import { ServiceModel } from "src/app/shared/utils/service-model";
import { environment } from "src/environments/environment";


@Injectable({ 
    providedIn: 'root'
})
export class PartsService extends ServiceModel {
    
    constructor(private partHttp: HttpClient) {
        super(partHttp);
        this.routeName = 'ship-part';
    }
    
    getAll(): Observable<Part[]> {
        return this.partHttp.get<Part[]>(`${environment.url}/${this.routeName}`)
    }

    delete(id: string): Observable<any> {
        return this.partHttp.delete<any>(`${environment.url}/${this.routeName}/${id}`)
    }
}