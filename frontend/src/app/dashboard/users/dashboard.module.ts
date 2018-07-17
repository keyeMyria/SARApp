import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { OverviewComponent } from './overview/overview.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SettingsComponent } from './settings/settings.component';
import { MessagesComponent } from './messages/messages.component';
import { MyscheduleComponent } from './myschedule/myschedule.component';
import { EmployeeComponent } from './employee/employee.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule
  ],
  declarations: [
    DashboardComponent,
    ProfileComponent,
    OverviewComponent,
    ScheduleComponent,
    SettingsComponent,
    MessagesComponent,
    MyscheduleComponent,
    EmployeeComponent
  ]
})
export class DashboardModule { }
