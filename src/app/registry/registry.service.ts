import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class RegistryService {
    constructor(private http: HttpClient) {

    }

    getRegistryInformation(): Observable<Array<Registry>> {
        return this.http.get<Array<Registry>>("registry.php", { responseType: "json" });
    }
}

export class Registry {
    reg_id: number;
    reg_url: string;
    reg_icon: string;
}