import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RSVPFormComponent } from './rsvp-form.component';

const routes: Routes = [
    {
        path: '', component: RSVPFormComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class RSVPFormRoutingModule { }


