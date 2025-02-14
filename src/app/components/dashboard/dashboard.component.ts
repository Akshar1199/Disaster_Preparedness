import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DisasterService } from '../../services/disaster.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidebarComponent } from '../../reusable/sidebar/sidebar.component';
import { NavBarComponent } from "../../reusable/nav-bar/nav-bar.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatDividerModule,
    MatInputModule,
    FormsModule,
    MatSidenavModule,
    NavBarComponent,
    SidebarComponent
],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  disasters: any[] = [];
  filteredDisasters: any[] = [];
  searchQuery: string = '';
  sidebarOpen = true;

  @ViewChild(NavBarComponent) navBar!: NavBarComponent;

  constructor(private disasterServ: DisasterService, private router: Router) {}

  ngOnInit(): void {
    this.disasterServ.getData().subscribe((res) => {
      this.disasters = res[0].disasters;
      this.filteredDisasters = this.disasters;
    });
  }

  onSearch(field:string) {
    this.searchQuery = field;
    const query = this.searchQuery.toLowerCase();
    this.filteredDisasters = this.disasters.filter(disaster =>
      disaster.category.toLowerCase().includes(query)
    );

  }

  selectedDisaster(disaster: string) {
    this.router.navigate(['disaster/', disaster]);
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  goToProfile(){
    this.router.navigate(['/profile']);
  }

  toggleSidebar() {
    this.sidebarOpen = true;
  }

  onCloseSidebar() {
    this.sidebarOpen = false;
    this.navBar.sidebarOpen = false;
  }

  logout() {}
}
