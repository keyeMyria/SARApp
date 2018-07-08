import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RequestResetModule } from './request-reset/request-reset.module';
import { ResponseResetModule } from './response-reset/response-reset.module';
@NgModule({
    imports: [
        CommonModule,
        RequestResetModule,
        ResponseResetModule,
        FormsModule
    ],
    declarations: [],
    providers: []
})

export class PasswordModule {}