import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { OverviewComponent } from './overview/overview.component';
import { DashboardNavComponent } from './dashboard-nav/dashboard-nav.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SettingsComponent } from './settings/settings.component';
import { MessagesComponent } from './messages/messages.component';
import { MyscheduleComponent } from './myschedule/myschedule.component';

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
    DashboardNavComponent,
    ScheduleComponent,
    SettingsComponent,
    MessagesComponent,
    MyscheduleComponent
  ]
})
export class DashboardModule { }
