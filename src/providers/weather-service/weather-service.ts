import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import * as http from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { resolveDefinition } from '@angular/core/src/view/util';
import { urlToNavGroupStrings } from 'ionic-angular/umd/navigation/url-serializer';


@Injectable()
export class WeatherServiceProvider {
  
  place :string ="";
  type: string = "";
  icon: string = "";
  temperature: string = "";
  item: any;
  apiKey = "040fb563540636c411bc57239d264d34";
  baseURL = "https://api.openweathermap.org/data/2.5/weather?q=";
  url;
  test;

  constructor(public http: HttpClient) {
    console.log('Hello WeatherServiceProvider Provider');
  
  }
  getTemperature(city){
    this.url = this.baseURL + city + '&appid=' + this.apiKey;
    return this.http.get(this.url);
  }


  }

 