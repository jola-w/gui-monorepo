import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherViewComponent } from './weather/weather-view/weather-view.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'weather-forecast', component: WeatherViewComponent },
  { path: 'weather-forecast', loadChildren: './weather/weather.module#WeatherModule' },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
