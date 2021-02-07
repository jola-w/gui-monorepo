import { Component, OnInit, ContentChildren, QueryList, ViewChildren, ElementRef, EventEmitter, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { WeatherService } from '../weather.service';
import { WeatherDto } from '../../core/class/WeatherDto';
import { HttpClient } from '@angular/common/http';
import { IgxCarouselComponent } from 'igniteui-angular';
import { SpinnerService } from '../../shared/component/spinner.service';
import { TempchartComponent } from '../tempchart/tempchart.component';
import {HourTemp} from '../../core/class/HourTemp';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ev-weather-view',
  templateUrl: './weather-view.component.html',
  styleUrls: ['./weather-view.component.scss']
})
export class WeatherViewComponent implements OnInit {

  @ViewChild(TempchartComponent) child:TempchartComponent;

  ishttpLoaded: boolean = true;
  isLoaded: boolean = false;

  public cityWeather: string;
  public data: Date;
  public path: string;
  public dailyTemp : HourTemp[];
  public dailyWeather: WeatherDto[];

  public weatherDto: WeatherDto[];
  public weatherDtoAll: WeatherDto[];
  sub5: Subscription;

  constructor(
    public weather: WeatherService,
    public http: HttpClient,
    private dataSo: SpinnerService,
    private translate: TranslateService) {
  }

  ngOnInit() {
    this.dataSo.returnAsObservable().subscribe(
      subs => {
      this.ishttpLoaded = subs;
      });

      this.cityWeather = this.translate.instant('WEATHER.DEAULT_CITY');
      this.sub5 = this.weather.getForecast(this.cityWeather).subscribe((data: any) => {
        this.weatherDto = data.filter(item => new Date(item.dt_txt).getHours()  === 12);
        this.weatherDtoAll = data;
        console.log(data);
      });
  }
  onSlideChanged(carousel: IgxCarouselComponent) {
    this.data = this.weatherDto[carousel['slide'].index].dt_txt;
    this.dailyWeather = this.weatherDtoAll.filter(
    item => new Date(item.dt_txt).getDate()  === new Date(this.data.valueOf().toString()).getDate());

  this.dailyTemp = [];
    this.dailyWeather.forEach((weather: WeatherDto) => {
      this.dailyTemp.push({temp: weather.main.temp,
                            hour: new Date(weather.dt_txt).getHours(),
                            date: new Date(weather.dt_txt)});
    })
    console.log(this.dailyTemp);
    this.child.onInitChart(this.dailyTemp);
  }

  public getImgPath( icon: string): string {
    return this.weather.getImgPath(icon);
  }

  searchWeatcherForCity(city: string) {
        this.sub5 = this.weather.getForecast(city).subscribe((data: any) => {
        this.weatherDto = data.filter(item => new Date(item.dt_txt).getHours()  === 12);
        this.weatherDtoAll = data;
        this.cityWeather = city;
      });
  }

  ngOnDestroy() {
    this.sub5.unsubscribe();
  }

}
