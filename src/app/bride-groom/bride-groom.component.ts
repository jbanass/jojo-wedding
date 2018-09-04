import { Component, ElementRef, ViewChild, AfterViewInit, ChangeDetectorRef } from "@angular/core";
import { trigger, state, style, animate, transition, stagger, query } from '@angular/animations';
import { Subscription, Observable, fromEvent } from "rxjs";

@Component({
  selector: "bride-groom",
  templateUrl: "./bride-groom.component.html",
  styleUrls: ["./bride-groom.component.scss"]
})
export class BrideGroomComponent {

  scrollPos: number;
  windowHeight: number;

  subscriptionScroll: Subscription;

  constructor(private ref: ChangeDetectorRef) {

  }

  ngAfterViewInit() {
    
  }
}
