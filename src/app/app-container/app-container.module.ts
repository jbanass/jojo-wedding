import { NgModule } from "@angular/core";

import { AppContainerComponent } from "./app-container.component";

import { HeroModule } from "../hero/hero.module";
import { NavModule } from "../nav/nav.module";
import { BrideGroomModule } from "../bride-groom/bride-groom.module";
import { OurStoryModule } from "../our-story/our-story.module";
import { BridalPartyModule } from "../bridal-party/bridal-party.module";
import { FestivitiesModule } from "../festivities/festivities.module";
import { HotelModule } from "../hotel/hotel.module";
import { RegistryModule } from "../registry/registry.module";
import { RSVPModule } from "../rsvp/rsvp.module";

@NgModule({
  imports: [
    HeroModule,
    NavModule,
    BrideGroomModule,
    OurStoryModule,
    BridalPartyModule,
    FestivitiesModule,
    HotelModule,
    RegistryModule,
    RSVPModule
  ],
  exports: [AppContainerComponent],
  declarations: [AppContainerComponent],
  providers: []
})
export class AppContainerModule {}
