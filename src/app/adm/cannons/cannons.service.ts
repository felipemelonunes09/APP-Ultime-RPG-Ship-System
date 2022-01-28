import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceModel } from 'src/app/shared/utils/service-model';

@Injectable({
  providedIn: 'root'
})
export class CannonService extends ServiceModel {
  constructor(private cannonHttp: HttpClient) {
    super(cannonHttp);
    this.routeName = "cannon";
  }
}
