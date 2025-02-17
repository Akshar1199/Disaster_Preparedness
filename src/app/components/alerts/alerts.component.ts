import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../services/location.service';
import { AlertService } from '../../services/alert.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css'],
  imports:[CommonModule, MatCardModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatListModule]
})
export class AlertsComponent implements OnInit {
  alerts: { city: string, message: string }[] = [];
  loading = true;
  errorMessage = '';

  constructor(private locationService: LocationService, private alertService: AlertService) {}

  
  ngOnInit() {
    this.locationService.getCurrentLocation()
      .then(location => {
        this.alerts = this.alertService.getAlertsForCity(location.city);
        this.alertService.getLength()
        this.loading = false;
      })
      .catch(error => {
        this.errorMessage = 'Unable to fetch location';
        this.loading = false;
      });
  }
}
