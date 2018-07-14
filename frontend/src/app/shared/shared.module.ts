import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelperModule } from './Helpers/helper.module';
import { ServicesModule } from './Services/services.module';
import { JwtModule } from '@auth0/angular-jwt';
@NgModule({
    imports: [
        CommonModule,
        HelperModule,
        ServicesModule,
        JwtModule
    ],
    declarations: [],
    providers: []
})

export class SharedModule {}