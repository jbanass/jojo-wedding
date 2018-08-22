import { Component, ElementRef } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"]
})
export class NavComponent {
  private isClosed: boolean = true;

  constructor(private router: Router) {}

  toggleNavDrawer() {
    this.isClosed = !this.isClosed;
  }

  scrollTo(id: string) {
    var timeout: number = 0;

    if (this.router.url === "/rsvp") {
      if (id === "rsvp") {
        if (!this.isClosed) this.toggleNavDrawer();
        return;
      }

      timeout = 100;
      this.router.navigate(["/"]);
    }

    setTimeout(() => {
      document
        .getElementById(id)
        .scrollIntoView({ behavior: "smooth", block: "start" });
      if (!this.isClosed) {
        this.toggleNavDrawer();
      }
    }, timeout);
  }
}
