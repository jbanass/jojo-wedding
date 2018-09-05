import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Hotel, HotelService } from './hotel.service';

import { Subscription, fromEvent } from 'rxjs';

@Component({
    selector: 'hotel',
    templateUrl: './hotel.component.html',
    styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {
    public hotel: Hotel

    constructor(private service: HotelService) {

    }

    ngOnInit() {
        this.service.getHotelInformation().subscribe((hotel: Hotel) => {
            this.hotel = hotel[0];
        });
    }

    @ViewChild('hotelcontainer') hotelcontainer: ElementRef;
    hotelcontainerInView: boolean = false;

    @ViewChild('hotelinfo') hotelinfo: ElementRef;
    hotelinfoInView: boolean = false;

    scrollPos: number;
    windowHeight: number;

    subscriptionScroll: Subscription;

    ngAfterViewInit() {
        this.subscriptionScroll = fromEvent(window, 'scroll').subscribe(() => this.onScroll());
        this.scrollPos;
    }

    checkVisibility() {
        if ((<HTMLDivElement>this.hotelcontainer.nativeElement).getBoundingClientRect().top < 1000) {
            if (!this.hotelcontainerInView) {
                this.hotelcontainerInView = true;
            }
        }

        if ((<HTMLDivElement>this.hotelinfo.nativeElement).getBoundingClientRect().top < 1000) {
            if (!this.hotelinfoInView) {
                this.hotelinfoInView = true;
            }
        }
    }

    onScroll() {
        this.scrollPos = window.scrollY;
        this.windowHeight = window.innerHeight;
        this.checkVisibility();
    }
}