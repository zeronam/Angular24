import { Component, OnInit } from '@angular/core';
import {WeatherService} from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [WeatherService]
})
export class WeatherComponent implements OnInit {
  txtcityName = '';
  cityName = '';
  tempNum = '';
  isLoading = false;
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    // this.weatherService.getTemp('tokyo')
    // .then( temp => console.log(temp) )
    // .catch(err => console.log(err));
  }
  weatherSelect(){
    this.isLoading = true;
    this.weatherService.getTemp(this.txtcityName)
    .then( temp => {this.cityName = this.txtcityName; this.tempNum = temp; this.isLoading = false} )
    .catch(err => {alert('Can not find the city!!!'); this.txtcityName = ''; this.isLoading = false; this.cityName = ''});
  }

  getMessage(){
    if(this.isLoading){
      return 'Loading...'
    }
    return this.cityName === '' ? 'Enter Your city name' : this.cityName + ' is now ' + this.tempNum;
  }

}
