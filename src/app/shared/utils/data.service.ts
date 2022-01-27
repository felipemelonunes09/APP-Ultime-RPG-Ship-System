import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Rank } from "src/app/shared/models/rank.model";

@Injectable({ 
    providedIn: 'root'
})
export class DataService {

    constructor(private http: HttpClient) {}
    
    public getRanking() {
        return this.http.get<Rank[]>('assets/data/ranking.json')
    }
    
}