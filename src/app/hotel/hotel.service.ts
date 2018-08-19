import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class HotelService {
    constructor(private http: HttpClient) {

    }

    getHotelInformation(): Observable<Hotel> {
        return this.http.get<Hotel>("hotel.php");
    }
}

export class Hotel {
    id: number;
    hot_name: string;
    hot_address_1: string;
    hot_address_2: string;
    hot_address_3: string;
    hot_city: string;
    hot_state: string;
    hot_zip: string;
    hot_phone: string;
    hot_group_code: string;
    hot_url: string;
}