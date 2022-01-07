import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

export class ServiceModel { 
    
    public routeName: string = "";
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get(`${environment.url}/${this.routeName}`);
    }
    
    getById(id: number) {
        return this.http.get(`${environment.url}/${this.routeName}/${id}`);
    }
    
    create(data: any) {
        return this.http.post(`${environment.url}/${this.routeName}`, data);
    }
    
    update(data: any) {
      return this.http.patch(`${environment.url}/${this.routeName}/${data.id}`, data);
    }
    
    delete(id: number) {
      return this.http.delete(`${environment.url}/${this.routeName}/${id}`);
    }
}
