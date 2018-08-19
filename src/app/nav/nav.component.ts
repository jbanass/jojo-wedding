import { Component, ElementRef } from '@angular/core';

@Component({
    selector: 'nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent {
    private isClosed: boolean = true;

    toggleNavDrawer() {
        this.isClosed = !this.isClosed;
    }

    scrollTo(id: string) {
        document.getElementById(id).scrollIntoView({ behavior: "smooth", block: "start" });
        if (!this.isClosed) {
            this.toggleNavDrawer();
        }
    }
}