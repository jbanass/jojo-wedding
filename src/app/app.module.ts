import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";

import { HeroModule } from "./hero/hero.module";
import { BrideGroomModule } from "./bride-groom/bride-groom.module";
import { OurStoryModule } from './our-story/our-story.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HeroModule,
    BrideGroomModule,
    OurStoryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
