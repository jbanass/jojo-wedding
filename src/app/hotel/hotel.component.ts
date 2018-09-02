import { Component, OnInit } from '@angular/core';
import { Hotel, HotelService } from './hotel.service';

@Component({
    selector: 'hotel',
    templateUrl: './hotel.component.html',
    styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {
    private hotel: Hotel

    constructor(private service: HotelService) {

    }

    ngOnInit() {
        this.service.getHotelInformation().subscribe((hotel: Hotel) => {
            console.log(hotel);
            this.hotel = hotel[0];
        });
    }
}