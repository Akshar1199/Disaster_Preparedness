import { Component } from '@angular/core';
import { GuidelinesComponent } from "../guidelines/guidelines.component";
import { ResourceShelterListComponent } from "../resource-shelter-list/resource-shelter-list.component";

@Component({
  selector: 'app-alert',
  imports: [GuidelinesComponent, ResourceShelterListComponent],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent {
  category: string = 'Earthquake';

}
