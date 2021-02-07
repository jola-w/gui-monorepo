import { Component, OnInit, Input } from '@angular/core';
import { WeatherDto } from '../../../core/class/WeatherDto';
import { WeatherService } from '../../weather.service';

@Component({
  selector: 'ev-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent implements OnInit {

@Input() dailyWeather: [WeatherDto];

  constructor( private weather: WeatherService
    ) { }

  ngOnInit(): void {
  }

  public getImgPath( icon: string): string {
    return this.weather.getImgPath(icon);
  }

}
