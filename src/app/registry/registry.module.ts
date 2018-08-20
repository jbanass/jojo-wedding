import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { RegistryComponent } from './registry.component';
import { RegistryService } from './registry.service';

@NgModule({
    imports: [
        HttpClientModule
    ],
    declarations: [
        RegistryComponent
    ],
    exports: [
        RegistryComponent
    ],
    providers: [
        RegistryService
    ]
})
export class RegistryModule {

}