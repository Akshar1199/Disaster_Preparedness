import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private alerts = [
    { city: 'Ahmedabad', message: 'Heavy Rainfall Expected Tomorrow' },
    { city: 'Ahmedabad', message: 'EarthQuake alert' },
    { city: 'Mumbai', message: 'Cyclone Alert in Coastal Areas' },
    { city: 'Delhi', message: 'High Pollution Levels Detected' }
  ];
  subject = new Subject<number>()
  length:number=0
  filteredAlerts:any[]=[];
  constructor() {
    this.getLength()
  }

  getAlertsForCity(city: string) {
    this. filteredAlerts= this.alerts.filter(alert => alert.city === city)
    return this.filteredAlerts;
  }
  getLength(){
    this.length= this.filteredAlerts.length;
    this.subject.next(this.length)
    console.log("Service ",this.length)
  }
}
