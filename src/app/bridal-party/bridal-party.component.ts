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
        console.log(this.bridesmaids.nativeElement.getBoundingClientRect())
        console.log(this.groomsmen.nativeElement.getBoundingClientRect())
        this.scrollPos;
    }

    checkVisibility() {
        console.log(this.scrollPos);
        console.log("bridesmaid height", this.bridesmaids.nativeElement.getBoundingClientRect());
        if ((<HTMLDivElement>this.bridesmaids.nativeElement).getBoundingClientRect().top < 1000) {
            if (!this.bridesmaidsInView) {
                console.log("bridesmaid in view", this.scrollPos)
                this.bridesmaidsInView = true;
            }
        }

        if ((<HTMLDivElement>this.groomsmen.nativeElement).getBoundingClientRect().top < 1000) {
            if (!this.groomsmenInView) {
                console.log("groomsmen in view", this.scrollPos)
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