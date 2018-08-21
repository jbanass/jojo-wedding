import { NgModule } from '@angular/core';

import { RSVPFormRoutingModule } from './rsvp-form-routing.module';

import { RSVPFormComponent } from './rsvp-form.component';

@NgModule({
    imports: [
        RSVPFormRoutingModule
    ],
    exports: [
        RSVPFormComponent
    ],
    declarations: [
        RSVPFormComponent
    ],
    providers: [

    ]
})
export class RSVPFormModule {

}