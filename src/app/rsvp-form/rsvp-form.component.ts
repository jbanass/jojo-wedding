import { Component } from "@angular/core";

import { FormGroup, FormControl } from "@angular/forms";

import { RSVPService } from "./rsvp.service";

@Component({
  selector: "rsvp-form",
  templateUrl: "./rsvp-form.component.html",
  styleUrls: ["./rsvp-form.component.css"]
})
export class RSVPFormComponent {
  validationCode: string = null;
  isValidated: boolean = false;

  constructor(private service: RSVPService) {}

  validate(code: string) {
    this.service.submitRSVP(code).subscribe((result: boolean) => {
      this.isValidated = result;

      if (!this.isValidated) {
        alert("Sorry, " + code + " is not valid.");
      }
    });
  }
}
