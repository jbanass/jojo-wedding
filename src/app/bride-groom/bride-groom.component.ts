import { Component, ElementRef, ViewChild, AfterViewInit, ChangeDetectorRef } from "@angular/core";
import { trigger, state, style, animate, transition, stagger, query } from '@angular/animations';
import { Subscription, Observable, fromEvent } from "rxjs";

@Component({
  selector: "bride-groom",
  templateUrl: "./bride-groom.component.html",
  styleUrls: ["./bride-groom.component.scss"]
})
export class BrideGroomComponent {
  @ViewChild('bridegroom') brideGroom: ElementRef;
  brideGroomInView: boolean = false;

  scrollPos: number;
  windowHeight: number;

  subscriptionScroll: Subscription;

  ngAfterViewInit() {
        this.subscriptionScroll = fromEvent(window, 'scroll').subscribe(() => this.onScroll());
        this.scrollPos;
    }

    checkVisibility() {
        if (this.scrollPos >= (<HTMLDivElement>this.brideGroom.nativeElement).getBoundingClientRect().top) {
            if (!this.brideGroomInView) {
                this.brideGroomInView = true;
            }
        }
    }

    onScroll() {
        this.scrollPos = window.scrollY;
        this.windowHeight = window.innerHeight;
        this.checkVisibility();
    }
}
