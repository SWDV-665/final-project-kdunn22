import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherServiceProvider } from '../../providers/weather-service/weather-service';
import { HttpClientModule } from '@angular/common/http';
import { Storage } from '@ionic/storage';





@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [WeatherServiceProvider]
  
})
export class HomePage {
  place :string ="";
  type: string = "";
  icon: string = "";
  temperature: string = "";

  constructor(public navCtrl: NavController, public http: HttpClientModule, public WeatherServiceProvider: WeatherServiceProvider, private storage:Storage) {
    if (sessionStorage.length == 0){
      sessionStorage.setItem("city", "Cleveland")
      console.log("test")
    } 
    var city = sessionStorage.getItem("city");
    this.WeatherServiceProvider.getTemperature(city)
      .subscribe(data => {
        this.temperature = (parseFloat(data.main.temp)-273.15).toFixed(2).toString()+ " Degrees Celcius";
        this.place = data.name;
        this.type =data.weather[0].main;
        this.icon = 'http://openweathermap.org/img/w/'+data.weather[0].icon+".png";
      })
    
      
  }

}


