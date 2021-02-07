import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { HourfromdatePipe } from './pipes/hourfromdate.pipe';
import { DateOnlyPipe } from './pipes/date-only.pipe';
import { MaterialModule } from '../material/material.module';
import { ErrordialogComponent } from '../shared/component/component/errordialog/errordialog.component';
import { SpinnerComponent } from '../shared/component/component/spinner/spinner.component';
import { IgxCarouselModule, IgxSliderModule } from 'igniteui-angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { ChartModule, MapChart } from 'angular-highcharts';
import heatmap  from 'highcharts/modules/heatmap';



@NgModule({
  declarations: [HourfromdatePipe, DateOnlyPipe,
  ErrordialogComponent, SpinnerComponent],
  imports: [
    CommonModule,
    MaterialModule,
    IgxCarouselModule,
    IgxSliderModule,
    FontAwesomeModule,
    TranslateModule,
    RouterModule,
    ChartModule
  ],
  providers: [DatePipe],
  exports:  [
    HourfromdatePipe,
    DateOnlyPipe,
    ErrordialogComponent,
    SpinnerComponent,
    IgxCarouselModule,
    IgxSliderModule,
    FontAwesomeModule,
    TranslateModule,
    MaterialModule,
    RouterModule,
    ChartModule,
    DatePipe
  ]
})
export class SharedModule { }
