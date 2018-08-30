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

  personForm: FormGroup;
  message: string = undefined;
  partyMembers: Array<Person> = new Array<Person>();

  party: FormGroup;
  partyList: FormGroup;
  partyLeaderName: string = undefined;
  isComing: boolean = undefined;
  submittedPeople: any[] = [];
  submitted: boolean = false;

  constructor(private service: RSVPService, private fb: FormBuilder) {
    this.personForm = new FormGroup({
      firstName: new FormControl("", Validators.required),
      lastName: new FormControl("", Validators.required),
      coming: new FormControl("-1", Validators.required),
      age: new FormControl("-1", Validators.required),
      food: new FormControl("-1", Validators.required),
      foodNotes: new FormControl("")
    });
  }

  ngOnInit() {}

  submitPartyMember() {
    const person: Person = {
      firstName: this.personForm.get("firstName").value,
      lastName: this.personForm.get("lastName").value,
      coming: this.personForm.get("coming").value,
      age: this.personForm.get("age").value,
      food: this.personForm.get("food").value,
      foodNotes: this.personForm.get("foodNotes").value
    };

    this.partyMembers.push(person);
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
    var age: string = "-1";
    var food: string = "-1";
    var foodNotes: string = "";

    if (index === 0) {
      name = this.partyLeaderName;
      console.log("Hit index 0", name);
    }

    return new FormGroup({
      name: new FormControl(name, Validators.required),
      age: new FormControl(age, Validators.required),
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
      firstName: this.partyList.value["firstName"],
      food: this.partyList.value["food"],
      age: this.partyList.value["age"],
      foodNotes: this.partyList.value["foodNotes"]
    };

    this.submittedPeople = [...this.submittedPeople, person];
  }

  saveAndAddGuest() {
    this.AddGuest();
    this.buildForm();
  }

  submitParty() {
    if (
      this.partyList.value["name"] &&
      this.partyList.value["food"] !== "-1" &&
      this.partyList.value["age"] !== "-1"
    ) {
      this.AddGuest();
    }

    this.submitted = true;
  }

  submitSong(song: string) {
    const rsvp: RSVP = {
      people: this.submittedPeople,
      song: song
    };

    console.log(rsvp);
    this.saveToDB();
  }

  saveToDB() {
    alert("Thanks, your info has been saved! We can't wait to see you!");
  }

  rejectInvite() {
    this.isComing = false;
    alert("Thanks " + this.partyLeaderName + " for letting us know!");
  }

  isAdult() {
    return this.partyList.value["age"] === "0";
  }

  isChild() {
    return this.partyList.value["age"] === "1";
  }

  isFoodChecked(value: string) {
    return this.partyList.value["food"] === value;
  }
}

class Person {
  firstName: string;
  lastName: string;
  coming: string;
  age: string;
  food: string;
  foodNotes: string;
}

class RSVP {
  people: Array<Person>;
  song: string;
}
