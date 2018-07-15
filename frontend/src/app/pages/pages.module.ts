import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { ProcessModule } from './process/process.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        HomeModule,
        LoginModule,
        RegisterModule,
        ProcessModule,
        FormsModule
    ],
    declarations: [],
    providers: []
})

export class PagesModule {}