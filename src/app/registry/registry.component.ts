import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';
import { RegistryService, Registry } from './registry.service';

@Component({
    selector: 'registry',
    templateUrl: './registry.component.html',
    styleUrls: ['./registry.component.scss']
})
export class RegistryComponent implements OnInit {
    private registry: Array<Registry>;

    constructor(private service: RegistryService) {

    }

    @ViewChild('registry') registryElement: ElementRef;
    registryElementIsInView: boolean = false;


    scrollPos: number;
    windowHeight: number;

    subscriptionScroll: Subscription;

    ngAfterViewInit() {
        this.subscriptionScroll = fromEvent(window, 'scroll').subscribe(() => this.onScroll());
    }

    checkVisibility() {
        if (this.scrollPos >= (<HTMLDivElement>this.registryElement.nativeElement).getBoundingClientRect().top) {
            if (this.registryElementIsInView !== true) {
                this.registryElementIsInView = true;
            }
        }
    }

    onScroll() {
        this.scrollPos = window.scrollY;
        this.windowHeight = window.innerHeight;
        this.checkVisibility();
    }

    ngOnInit() {
        this.service.getRegistryInformation().subscribe((registry: Array<Registry>) => {
            this.registry = registry;
        })
    }

    openRegistry(url: string) {
        window.open(url, "_blank");
    }
}