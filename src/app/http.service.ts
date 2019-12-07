import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {}
  house(){
    var val =  Math.floor(Math.random() * (500-200) + 200)
    return val;
  }
  cave(){
    return Math.floor(Math.random() * (7000-5000) + 5000);
  }
  farm(){
    return Math.floor(Math.random() * (2000-500) + 500);
  }
  casino(){
    return Math.floor(Math.random() * (50000-10000) + -10000);
  }
}
