import { Component, OnInit } from "@angular/core";

import { FormGroup, FormControl, FormBuilder, FormArray } from "@angular/forms";

import { RSVPService } from "./rsvp.service";

@Component({
  selector: "rsvp-form",
  templateUrl: "./rsvp-form.component.html",
  styleUrls: ["./rsvp-form.component.scss"]
})
export class RSVPFormComponent implements OnInit {
  validationCode: string = null;
  isValidated: boolean = false;
  party: FormGroup;
  partyList: FormGroup;
  partyLeaderName: string = '';


  constructor(private service: RSVPService, private fb: FormBuilder) { }

  ngOnInit() {
    // this.partyLeader = new FormGroup({
    //   name: new FormControl(),
    //   guestCount: new FormControl()
    // });
  }

  buildForm(partyLeaderName: string, guestCount: string) {
    if (partyLeaderName !== null && guestCount !== null) {
      this.partyLeaderName = partyLeaderName;
      var people = [];

      const guestLimit = parseInt(guestCount) + 1;

      for (var i = 0; i < guestLimit; i++) {
        console.log(i);
        people.push(this.createPerson(i));
      }

      this.partyList = this.fb.group({
        people: this.fb.array(people)
      });
    }
  }

  createPerson(index: number) {
    var name: string = '';
    var food: number = null;
    var foodNotes: string = '';

    if (index === 0) {
      name = this.partyLeaderName;
      console.log("Hit index 0", name);
    }

    return this.fb.group({
      name: name,
      food: food,
      foodNotes: foodNotes
    });
  }

  validate(code: string) {
    this.service.submitRSVP(code).subscribe((result: boolean) => {
      this.isValidated = result;

      if (!this.isValidated) {
        alert("Sorry, " + code + " is not valid.");
      }
    });
  }
}
