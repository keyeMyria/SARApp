import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { IsLoggedOutService } from './Services/is-logged-out.service';
import { IsLoggedInService } from './Services/is-logged-in.service';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { HttpModule } from '@angular/http';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';


const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [IsLoggedOutService]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [IsLoggedOutService]
  },
  {
    path: 'user/verify',
    component: VerifyEmailComponent,
    canActivate: [IsLoggedOutService]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [IsLoggedInService]
  },
  {
    path: 'request-password-reset',
    component: RequestResetComponent,
    canActivate: [IsLoggedOutService]
  },
  {
    path: 'response-password-reset',
    component: ResponseResetComponent,
    canActivate: [IsLoggedOutService]
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    HttpModule,
    NgProgressModule.forRoot(),
    NgProgressHttpModule
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}
