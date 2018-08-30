import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { RSVPFormRoutingModule } from "./rsvp-form-routing.module";

import { NavModule } from "../nav/nav.module";
import { RSVPFormComponent } from "./rsvp-form.component";
import { RSVPService } from "./rsvp.service";

@NgModule({
  imports: [
    RSVPFormRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    NavModule
  ],
  exports: [RSVPFormComponent],
  declarations: [RSVPFormComponent],
  providers: [RSVPService]
})
export class RSVPFormModule {}
