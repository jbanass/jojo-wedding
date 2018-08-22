import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppContainerComponent } from "./app-container/app-container.component";

const routes: Routes = [
  {
    path: "",
    component: AppContainerComponent
  },
  { path: "rsvp", loadChildren: "./rsvp-form/rsvp-form.module#RSVPFormModule" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
