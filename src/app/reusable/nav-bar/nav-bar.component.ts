import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-nav-bar',
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
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {

  @Input() isOpen = false;
  @Output() closeSidebar = new EventEmitter<void>();
  @Output() searchEvent = new EventEmitter<string>();

  searchQuery: string = '';
  sidebarOpen = true;

  onSearch() {
    this.searchEvent.emit(this.searchQuery);
  }

  toggleSidebar() {
    this.sidebarOpen = true;
    this.closeSidebar.emit();
  }
}
