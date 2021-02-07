import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherViewComponent } from './weather-view/weather-view.component';
import { WeatherDetailsComponent } from './weather-view/weather-details/weather-details.component';
import { SearchbarComponent } from './weather-view/searchbar/searchbar.component';
import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { TempchartComponent } from './tempchart/tempchart.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { SliderContentComponent } from './slider-content/slider-content.component';

const routes: Routes = [
  { path: '', component: WeatherViewComponent }
];

@NgModule({
  declarations: [  WeatherViewComponent,
    WeatherDetailsComponent,
    SearchbarComponent,
    TempchartComponent,
    SliderContentComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule,
    HighchartsChartModule

  ],
  exports: [
    WeatherViewComponent,
    WeatherDetailsComponent,
    SearchbarComponent
  ]
})
export class WeatherModule { }
