import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { HotelComponent } from './hotel.component';

import { HotelService } from './hotel.service';

@NgModule({
    imports: [
        HttpClientModule
    ],
    declarations: [
        HotelComponent
    ],
    exports: [
        HotelComponent
    ],
    providers: [
        HotelService
    ]
})
export class HotelModule {

}