import { Component, OnInit } from "@angular/core";

import {
  FormGroup,
  FormControl,
  FormBuilder,
  FormArray,
  Validators
} from "@angular/forms";

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
  partyLeaderName: string = "";
  isComing: boolean = undefined;
  submittedPeople: any[] = [];

  constructor(private service: RSVPService, private fb: FormBuilder) {}

  ngOnInit() {
    // this.partyLeader = new FormGroup({
    //   name: new FormControl(),
    //   guestCount: new FormControl()
    // });
  }

  setPartyLeader(name: string) {
    this.partyLeaderName = name;
  }

  buildForm() {
    if (this.partyLeaderName !== null) {
      console.log("building form", this.submittedPeople);
      this.isComing = true;

      this.partyList = this.createPerson(this.submittedPeople.length);
    }
  }

  createPerson(index: number) {
    var name: string = "";
    var food: string = "-1";
    var foodNotes: string = "";

    if (index === 0) {
      name = this.partyLeaderName;
      console.log("Hit index 0", name);
    }

    return new FormGroup({
      name: new FormControl(name, Validators.required),
      food: new FormControl(food, Validators.required),
      foodNotes: new FormControl(foodNotes)
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

  AddGuest() {
    const person: Person = {
      name: this.partyList.value["name"],
      food: this.partyList.value["food"],
      foodNotes: this.partyList.value["foodNotes"]
    };

    this.submittedPeople = [...this.submittedPeople, person];
  }

  saveAndAddGuest() {
    this.AddGuest();
    this.buildForm();
  }

  submitParty() {
    this.AddGuest();
    alert("Thanks, your info has been saved! We can't wait to see you!");
    console.log(this.submittedPeople);
  }

  rejectInvite() {
    this.isComing = false;
    alert("Thanks " + this.partyLeaderName + " for letting us know!");
  }

  isBeefChecked() {
    return this.partyList.value["food"] === "0";
  }

  isChickenChecked() {
    return this.partyList.value["food"] === "1";
  }
}

class Person {
  name: string;
  food: string;
  foodNotes: string;
}
