import { Component, ViewChild, ElementRef } from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';

@Component({
    selector: 'festivities',
    templateUrl: './festivities.component.html',
    styleUrls: ['./festivities.component.scss']
})
export class FestivitiesComponent {
    @ViewChild('festivities') festivities: ElementRef;
    festivitiesInView: boolean = false;

    scrollPos: number;
    windowHeight: number;

    subscriptionScroll: Subscription;

    ngAfterViewInit() {
        this.subscriptionScroll = fromEvent(window, 'scroll').subscribe(() => this.onScroll());
    }

    checkVisibility() {
        if ((<HTMLDivElement>this.festivities.nativeElement).getBoundingClientRect().top < 500) {
            if (!this.festivitiesInView) {
                this.festivitiesInView = true;
            }
        }
    }

    onScroll() {
        this.scrollPos = window.scrollY;
        this.windowHeight = window.innerHeight;
        this.checkVisibility();
    }
}