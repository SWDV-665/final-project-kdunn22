import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  place :string;

  constructor(public navCtrl: NavController, public navParams: NavParams, ) {
    this.place = sessionStorage.getItem("city");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  saveCity(event: any){
    sessionStorage.setItem("city", this.place);
    window.location.reload();
  }
}

