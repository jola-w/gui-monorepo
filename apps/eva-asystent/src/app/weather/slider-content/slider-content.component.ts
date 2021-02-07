import { Component, OnInit, Input } from '@angular/core';
import { faCloud, faTemperatureHigh, faWind, faCloudRain, faAngleDoubleDown, faCalendar  } from '@fortawesome/free-solid-svg-icons';
import { WeatherDto } from '../../core/class/WeatherDto';
import { WeatherService } from '../weather.service';


@Component({
  selector: 'ev-slider-content',
  templateUrl: './slider-content.component.html',
  styleUrls: ['./slider-content.component.scss']
})
export class SliderContentComponent implements OnInit {
  @Input() weather: WeatherDto;
  @Input() cityWeather: string;

  faCloud = faCloud;
  faTemperatureHigh = faTemperatureHigh;
  faWind = faWind;
  faCloudRain = faCloudRain;
  faAngleDoubleDown = faAngleDoubleDown;
  faCalendar = faCalendar;

  constructor(
    public weatherSrv: WeatherService,
    ) { }

  ngOnInit(): void {
  }

  public getImgPath( icon: string): string {
    return this.weatherSrv.getImgPath(icon);
  }
}
