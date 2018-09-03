import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';

@Component({
    selector: 'bridal-party',
    templateUrl: './bridal-party.component.html',
    styleUrls: ['./bridal-party.component.scss']
})
export class BridalPartyComponent {
    @ViewChild('bridesmaids') bridesmaids: ElementRef;
    bridesmaidsInView: boolean = false;

    @ViewChild('groomsmen') groomsmen: ElementRef;
    groomsmenInView: boolean = false;

    scrollPos: number;
    windowHeight: number;

    subscriptionScroll: Subscription;

    ngAfterViewInit() {
        this.subscriptionScroll = fromEvent(window, 'scroll').subscribe(() => this.onScroll());
        this.scrollPos;
    }

    checkVisibility() {
        if ((<HTMLDivElement>this.bridesmaids.nativeElement).getBoundingClientRect().top < 1000) {
            if (!this.bridesmaidsInView) {
                this.bridesmaidsInView = true;
            }
        }

        if ((<HTMLDivElement>this.groomsmen.nativeElement).getBoundingClientRect().top < 1000) {
            if (!this.groomsmenInView) {
                this.groomsmenInView = true;
            }
        }
    }

    onScroll() {
        this.scrollPos = window.scrollY;
        this.windowHeight = window.innerHeight;
        this.checkVisibility();
    }
}