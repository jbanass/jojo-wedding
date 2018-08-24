import { Component, OnInit } from "@angular/core";

import { FormGroup, FormControl, FormBuilder, FormArray, Validators } from "@angular/forms";

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
  isComing: boolean = undefined;


  constructor(private service: RSVPService, private fb: FormBuilder) { }

  ngOnInit() {
    // this.partyLeader = new FormGroup({
    //   name: new FormControl(),
    //   guestCount: new FormControl()
    // });
  }

  setPartyLeader(name: string) {
    this.partyLeaderName = name;
  }

  buildForm(partyLeaderName: string, guestCount: string) {
    if (partyLeaderName !== null && guestCount !== null) {
      var people = [];

      const guestLimit = parseInt(guestCount);

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
    var food: number = -1;
    var foodNotes: string = '';

    if (index === 0) {
      name = this.partyLeaderName;
      console.log("Hit index 0", name);
    }

    return this.fb.group({
      name: new FormControl(name, Validators.required),
      food: new FormControl(food, Validators.required),
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

  submitParty() {
    console.log(this.partyList);
  }

  rejectInvite() {
    this.isComing = false;
    alert("Thanks " + this.partyLeaderName + " for letting us know!");
  }
}
