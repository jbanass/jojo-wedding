import { Injectable } from "@angular/core";

import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable()
export class RSVPService {
  constructor(private http: HttpClient) {}

  submitRSVP(code: string) {
    var params: HttpParams = new HttpParams().append("code", code);

    return this.http.get("rsvp.php", { params: params, responseType: "text" });
  }
}
