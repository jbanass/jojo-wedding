import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { NavComponent } from './nav.component';

@NgModule({
    imports: [

    ],
    declarations: [
        NavComponent
    ],
    exports: [
        NavComponent
    ],
    providers: [

    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class NavModule {

}