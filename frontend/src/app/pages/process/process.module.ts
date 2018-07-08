import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerifyEmailModule } from './verify-email/verify-email.module';
import { PasswordModule } from './password/password.module';
@NgModule({
    imports: [
        CommonModule,
        VerifyEmailModule,
        PasswordModule
    ],
    declarations: [],
    providers: []
})

export class ProcessModule {}