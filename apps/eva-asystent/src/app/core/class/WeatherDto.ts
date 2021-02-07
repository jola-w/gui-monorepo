import { Weather } from './Weather';
import { Data } from '@angular/router';
import { Wind } from './Wind';
import { WeatherMainAtt } from './WeatherMainAtt';
import { Clouds } from './Clouds';

export interface  WeatherDto {
clouds: Clouds;
dt_txt: Date;
main: WeatherMainAtt;
weather: Weather[];
wind: Wind;
}
