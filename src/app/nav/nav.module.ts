import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterModule } from "@angular/router";

import { NavComponent } from "./nav.component";

@NgModule({
  imports: [RouterModule],
  declarations: [NavComponent],
  exports: [NavComponent],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NavModule {}
