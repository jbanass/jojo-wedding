import { Injectable } from "@angular/core";

import { HttpClient, HttpParams } from "@angular/common/http";

import { of, Observable, throwError } from "rxjs";
import { catchError } from 'rxjs/operators';

@Injectable()
export class RSVPService {
  constructor(private http: HttpClient) { }

  validateCode(code: string): Observable<boolean> {
    var params: HttpParams = new HttpParams().append("code", code);

    return this.http.get<boolean>("validator.php", { params: params });
  }

  getFood(): Observable<Array<Food>> {
    return this.http.get<Array<Food>>("food.php");
  }

  submit(rsvp: RSVP): Observable<any> {
    return this.http.post<any>('submit.php', rsvp).pipe(
      catchError((error) => throwError(error))
    );
  }
}

export class Food {
  food_id: string;
  food_name: string;
  food_description: string;
}

export class Person {
  firstName: string = undefined;
  lastName: string = undefined;
  coming: string = undefined;
  food: string = undefined;
  foodNotes: string = undefined;
}

export class RSVP {
  people: Array<Person>;
  songName: string;
  songArtist: string;
  validationCode: string;
}