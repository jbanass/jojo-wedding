import { Component, ElementRef, ViewChild, AfterViewInit, ChangeDetectorRef } from "@angular/core";
import { trigger, state, style, animate, transition, stagger, query } from '@angular/animations';
import { Subscription, Observable, fromEvent } from "rxjs";

@Component({
  selector: "bride-groom",
  templateUrl: "./bride-groom.component.html",
  styleUrls: ["./bride-groom.component.scss"],
  animations: [
    trigger('outOfView', [
      state('outOfView', style({
        transform: 'translateX(-100%)',
        opacity: '0'
      })),
      state('inView', style({
        transform: 'translatex(0)',
        opacity: '1'
      })),
      transition('outOfView => inView', animate('0.5s 1s ease-out')),
    ]),
    trigger('brideInfoOutOfView', [
      state('brideInfoOutOfView', style({
        transform: 'translateX(-100%)',
        opacity: '0'
      })),
      state('brideInfoInView', style({
        transform: 'translatex(0)',
        opacity: '1'
      })),
      transition("brideInfoOutOfView => brideInfoInView", animate('0.5s 1s ease-out'))
    ]),
    trigger('groomInfoOutOfView', [
      state('groomInfoOutOfView', style({
        transform: 'translateX(-100%)',
        opacity: '0'
      })),
      state('groomInfoInView', style({
        transform: 'translatex(0)',
        opacity: '1'
      })),
      transition("groomInfoOutOfView => groomInfoInView", animate('0.5s 1s ease-out'))
    ])
  ]
})
export class BrideGroomComponent {
  @ViewChild('top') topOfComponent: ElementRef;
  containerIsInView: string = 'outOfView';

  @ViewChild('bride') brideElement: ElementRef;
  brideIsInView: string = 'brideInfoOutOfView';

  @ViewChild('groom') groomElement: ElementRef;
  groomIsInView: string = 'groomInfoOutOfView';

  scrollPos: number;
  windowHeight: number;

  subscriptionScroll: Subscription;

  constructor(private ref: ChangeDetectorRef) {

  }

  ngAfterViewInit() {
    this.subscriptionScroll = fromEvent(window, 'scroll').subscribe(() => this.onScroll());
  }

  checkVisibility() {
    if (this.scrollPos >= (<HTMLDivElement>this.topOfComponent.nativeElement).getBoundingClientRect().top) {
      if (this.containerIsInView !== 'inView') {
        this.containerIsInView = 'inView';
      }
    }

    if (this.scrollPos >= (<HTMLDivElement>this.brideElement.nativeElement).getBoundingClientRect().top) {
      if (this.brideIsInView !== 'brideInfoInView') {
        this.brideIsInView = 'brideInfoInView';
      }
    }

    if (this.scrollPos >= (<HTMLDivElement>this.groomElement.nativeElement).getBoundingClientRect().top) {
      if (this.groomIsInView !== 'groomInfoInView') {
        this.groomIsInView = 'groomInfoInView';
      }
    }
  }

  onScroll() {
    this.scrollPos = window.scrollY;
    this.windowHeight = window.innerHeight;
    this.checkVisibility();
  }


}
