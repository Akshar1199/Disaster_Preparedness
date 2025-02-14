import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "./reusable/sidebar/sidebar.component";
import { NavBarComponent } from "./reusable/nav-bar/nav-bar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'Disaster_preparedness';

  // sidebarOpen = false;
  // @ViewChild(NavBarComponent) navBar!: NavBarComponent;

  // toggleSidebar() {
  //   this.sidebarOpen = !this.sidebarOpen;
  // }

  // onCloseSidebar() {
  //   this.navBar.sidebarOpen = false;
  //   this.sidebarOpen = false;
  // }


}
