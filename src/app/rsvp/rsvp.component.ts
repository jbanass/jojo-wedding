import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";

import { RSVPService } from "./rsvp.service";

@Component({
  selector: "rsvp",
  templateUrl: "./rsvp.component.html",
  styleUrls: ["./rsvp.component.scss"]
})
export class RSVPComponent {
  code: FormControl = new FormControl("");

  constructor(private service: RSVPService) {}

  submit() {
    var code: string = this.code.value;

    this.service.submitRSVP(code).subscribe(
      (result: string) => console.log(result),
      error => {
        alert("Sorry, that is an invalid invite code.");
      }
    );
  }
}
