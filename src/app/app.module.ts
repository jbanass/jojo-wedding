import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";

import { AppContainerModule } from "./app-container/app-container.module";

import { HeroModule } from "./hero/hero.module";
import { FooterModule } from "./footer/footer.module";
import { NavModule } from "./nav/nav.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    AppContainerModule,
    HeroModule,
    FooterModule,
    NavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
