import { Component, OnInit, ChangeDetectorRef } from "@angular/core";

import {
  FormGroup,
  FormControl,
  FormBuilder,
  FormArray,
  Validators
} from "@angular/forms";

import { RSVPService, RSVP, Person, Food } from "./rsvp.service";
import { Router } from "@angular/router";

@Component({
  selector: "rsvp-form",
  templateUrl: "./rsvp-form.component.html",
  styleUrls: ["./rsvp-form.component.scss"]
})
export class RSVPFormComponent implements OnInit {
  validationCode: string = null;
  isValidated: boolean = false;

  currentPerson: Person = new Person();
  personForm: FormGroup;
  modal: ModalData = undefined;
  partyMembers: Array<Person> = new Array<Person>();
  partySubmitted: boolean = false;
  foods: Array<Food>;

  constructor(
    private service: RSVPService,
    private fb: FormBuilder,
    private ref: ChangeDetectorRef,
    private router: Router
  ) {
    this.personForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      coming: new FormControl(null, Validators.required),
      food: new FormControl(null, Validators.required),
      foodNotes: new FormControl("")
    });
  }

  ngOnInit() {
    this.service.getFood().subscribe((foods: Array<Food>) => {
      this.foods = foods.filter((food: Food) => Number(food.food_id) > 0);
    }, (error) => {
      console.log(error);
    });
    window.scrollTo(0, 0);
  }

  submitPartyMemberNameAndComing() {
    this.currentPerson.firstName = this.personForm.get("firstName").value;
    this.currentPerson.lastName = this.personForm.get("lastName").value;
    this.currentPerson.coming = this.personForm.get("coming").value;

    this.ref.detectChanges();

    if (this.currentPerson.coming === "1") {
      this.currentPerson.food = "-1";
      this.currentPerson.foodNotes = "Not coming";
      this.partyMembers.push(this.currentPerson);
      this.personForm.reset();

      this.modal = {
        message:
          "Thank you. " +
          this.currentPerson.firstName +
          " " +
          this.currentPerson.lastName +
          "'s response is waiting to be sent. Feel free to add more, or tap 'Finish RSVP' to send your responses!",
        callback: () => {
          this.modal = undefined;
        }
      };

      this.currentPerson = new Person();
    }
  }

  submitPartyMemberFoodChoice() {
    this.currentPerson.food = this.personForm.get("food").value;
    this.currentPerson.foodNotes = this.personForm.get("foodNotes").value;

    this.partyMembers.push(this.currentPerson);
    this.personForm.reset();

    this.modal = {
      message:
        "Thank you. " +
        this.currentPerson.firstName +
        " " +
        this.currentPerson.lastName +
        "'s response is waiting to be sent. Feel free to add more, or select 'Finish RSVP' to send your responses!",
      callback: () => {
        this.modal = undefined;
      }
    };

    this.currentPerson = new Person();
  }

  finalizeParty() {
    this.partySubmitted = true;

    if (!this.canShowSongChoice()) {
      const rsvp: RSVP = {
        people: this.partyMembers,
        songName: null,
        songArtist: null,
        validationCode: this.validationCode
      };

      this.saveToDB(rsvp);
    }
  }

  submitPartySong(songName: string, songArtist: string) {
    const rsvp: RSVP = {
      people: this.partyMembers,
      songName: songName,
      songArtist: songArtist,
      validationCode: this.validationCode
    };

    this.saveToDB(rsvp);
  }

  validate(code: string) {
    this.service.validateCode(code).subscribe((result: boolean) => {
      this.isValidated = result;

      if (!this.isValidated) {
        this.modal = {
          message: "Sorry, " + code + " is not valid.",
          callback: () => {
            this.modal = undefined;
          }
        };
      } else {
        this.validationCode = code;
      }
    });
  }

  saveToDB(rsvp: RSVP) {
    this.service.submit(rsvp).subscribe((result) => {
      this.modal = {
        message:
          "Thank you. " +
          rsvp.people.length +
          " responses have been saved! We can't wait to see you!",
        callback: () => {
          this.endSignUp();
        }
      };
    }, (error) => {
      console.log(error);
    });
  }

  endSignUp() {
    this.router.navigate(["/"]);
  }

  isPersonEntered(): boolean {
    return (
      this.currentPerson.firstName !== undefined &&
      this.currentPerson.lastName !== undefined &&
      this.currentPerson.coming !== undefined
    );
  }

  canShowSongChoice() {
    if (this.partySubmitted) {
      if (this.partyMembers.find((x: Person) => x.coming !== "1")) {
        return true;
      }
    }

    return false;
  }

  resetEntries() {
    this.partyMembers = [];
    this.personForm.reset();
    this.partySubmitted = false;
    this.currentPerson = new Person();

    this.modal = {
      message: "Your progress has been reset.",
      callback: () => {
        this.modal = undefined;
      }
    };
  }

  isFoodChecked(value: string) {
    return this.personForm.value["food"] === value;
  }
}

class ModalData {
  message: string = undefined;
  callback: Function = undefined;
}
