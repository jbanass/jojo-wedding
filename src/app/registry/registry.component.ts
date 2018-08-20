import { Component, OnInit } from '@angular/core';

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

    ngOnInit() {
        this.service.getRegistryInformation().subscribe((registry: Array<Registry>) => {
            this.registry = registry;
        })
    }

    openRegistry(url: string) {
        window.open(url, "_blank");
    }
}