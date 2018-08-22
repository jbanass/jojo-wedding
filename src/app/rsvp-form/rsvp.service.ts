import { Injectable } from "@angular/core";

import { HttpClient, HttpParams } from "@angular/common/http";

import { of, Observable } from "rxjs";

@Injectable()
export class RSVPService {
  constructor(private http: HttpClient) {}

  submitRSVP(code: string) {
    return Observable.create(observer => {
      observer.next(code === "hello");
    });
    // var params: HttpParams = new HttpParams().append("code", code);

    // return this.http.get("rsvp.php", { params: params, responseType: "text" });
  }
}
