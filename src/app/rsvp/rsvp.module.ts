import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from '@angular/router';

import { RSVPComponent } from "./rsvp.component";

import { RSVPService } from "./rsvp.service";

@NgModule({
  imports: [ReactiveFormsModule, HttpClientModule, RouterModule],
  declarations: [RSVPComponent],
  exports: [RSVPComponent],
  providers: [RSVPService]
})
export class RSVPModule { }
