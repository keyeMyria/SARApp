import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { OverviewComponent } from './overview/overview.component';
import { IsLoggedInService } from '../../shared/Services/is-logged-in.service';
import { ScheduleComponent } from './schedule/schedule.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { MessagesComponent } from './messages/messages.component';
import { MyscheduleComponent } from './myschedule/myschedule.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: OverviewComponent,
        canActivate:[IsLoggedInService],
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'schedule',
        component: ScheduleComponent,
        canActivate: [IsLoggedInService]
      },
      {
        path: 'settings',
        component: SettingsComponent
      },
      {
        path: 'messages',
        component: MessagesComponent
      },
      {
        path: 'myschedule',
        component: MyscheduleComponent
      },
      {
        path: 'employee',
        component: EmployeeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
