import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelperModule } from './Helpers/helper.module';
import { ServicesModule } from './Services/services.module';

@NgModule({
    imports: [
        CommonModule,
        HelperModule,
        ServicesModule
    ],
    declarations: [],
    providers: []
})

export class SharedModule {}