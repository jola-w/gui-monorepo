import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Subscription, interval } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { WeatherDto } from '../../core/class/WeatherDto';
import { Chart } from 'angular-highcharts';
import heatmap from 'highcharts/modules/heatmap';
import { HourTemp } from '../../core/class/HourTemp';
import { DatePipe } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';



heatmap(Highcharts);

@Component({
  selector: 'ev-tempchart',
  templateUrl: './tempchart.component.html',
  styleUrls: ['./tempchart.component.scss']
})
export class TempchartComponent implements OnInit {
  @Input() item: WeatherDto[];

  dailyTemp : number[];


  title = "app";
  chart;
  updateFromInput = false;
  Highcharts = Highcharts;
  chartConstructor = "chart";
  chartCallback;

  chartOptions = {
    series: [],
    exporting: {
      enabled: true
    },
    title: {
      text: '',

    },
    yAxis: {
      allowDecimals: true,
      title: {
        text: "Data"
      }
    }
  };

  constructor(private datePipe: DatePipe,
    private translate: TranslateService) {
    const self = this;

    // saving chart reference using chart callback
    this.chartCallback = chart => {
      self.chart = chart;
    };
  }

  ngOnInit() {}

  onInitChart(dataInput: HourTemp[]) {
    const self = this,
      chart = this.chart;

    chart.showLoading();
    setTimeout(() => {
      chart.hideLoading();
      const oneTab: [number[]] = [[]];
      dataInput.forEach((dataIn) => {
        const point: number[] = [];
        point.push(dataIn.hour);
        point.push(dataIn.temp)
        oneTab.push(point);
    });

    self.chartOptions.series = [
    {
      data: oneTab,
      name: "DailyTemp",
      type: "line"
    }];

    self.chartOptions.title =
      {
        text: this.translate.instant('WEATHER.CHART_TITLE')+this.datePipe.transform(dataInput[0].date.toString(),"yyyy-MM-dd")
      };

      self.updateFromInput = true;
    }, 2000);
  }
}
