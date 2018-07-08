import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './api.service';
import { AuthService } from './auth.service';
import { TokenService } from './token.service';
import { UserService } from './user.service';
import { IsLoggedInService } from './is-logged-in.service';
import { IsLoggedOutService } from './is-logged-out.service';


@NgModule({
    imports: [
        CommonModule,
        
    ],
    declarations: [],
    providers: [
        ApiService,
        AuthService,
        TokenService,
        UserService,
        IsLoggedInService,
        IsLoggedOutService
    ]
})

export class ServicesModule {}