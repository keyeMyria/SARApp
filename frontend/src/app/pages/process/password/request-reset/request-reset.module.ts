import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgProgressModule } from '@ngx-progressbar/core';
import { RequestResetComponent } from './request-reset.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgProgressModule
    ],
    declarations: [
        RequestResetComponent
    ],
    providers: []
})

export class RequestResetModule {}