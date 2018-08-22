import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { RSVPComponent } from "./rsvp.component";

@NgModule({
  imports: [ReactiveFormsModule, HttpClientModule, RouterModule],
  declarations: [RSVPComponent],
  exports: [RSVPComponent],
  providers: []
})
export class RSVPModule {}
