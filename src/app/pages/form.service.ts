import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  result:any;
  readonly url: string;

  constructor(private http: HttpClient) {
    this.url = '../assets/data/communities.json'
   }

   getCommunities():any {
    return this.http.get<any>(this.url);
   }

}
