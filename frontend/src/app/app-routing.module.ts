import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { IsLoggedOutService } from './shared/Services/is-logged-out.service';
import { IsLoggedInService } from './shared/Services/is-logged-in.service';

import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { VerifyEmailComponent } from './pages/process/verify-email/verify-email.component';
import { RequestResetComponent } from './pages/process/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './pages/process/password/response-reset/response-reset.component';
import { DashboardModule } from './dashboard/users/dashboard.module';
import { NotFoundComponent } from './not-found/not-found.component';


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
    loadChildren: () => DashboardModule,
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
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    HttpModule,
    NgProgressModule.forRoot(),
    NgProgressHttpModule,

  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}
