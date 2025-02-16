import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GuidelinesComponent } from './components/guidelines/guidelines.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ResourceShelterListComponent } from './components/resource-shelter-list/resource-shelter-list.component';
import { CommunityChatComponent } from './components/community-chat/community-chat.component';
import { AddGuidelinesComponent } from './components/add-guidelines/add-guidelines.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'disaster/:disasterName',
    component: GuidelinesComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'resource-shelter',
    component: ResourceShelterListComponent
  },
  {
    path: 'add-guidelines',
    component: AddGuidelinesComponent
  },
  {
    path: 'community',
    component: CommunityChatComponent
  }
];
