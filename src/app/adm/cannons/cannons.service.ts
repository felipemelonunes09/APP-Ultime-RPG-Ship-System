import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class CannonService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(`${environment.url}/cannon`);
  }

  add(data: any) {
    return this.http.post(`${environment.url}/cannon`, data);
  }

  update(data: any) {
    return this.http.patch(`${environment.url}/cannon/${data.id}`, data);
  }

  delete(id: any) {
    return this.http.delete(`${environment.url}/cannon/${id}`);
  }
}
