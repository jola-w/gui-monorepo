import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EvaAystent';

  isLoaded:boolean=false;
  ishttpLoaded:boolean=false;

  constructor(
    public translate: TranslateService,
    private route:Router
    ) {
    translate.addLangs(['en', 'pl']);
    translate.setDefaultLang('pl');
  }

  ngOnInit() {
  this.route.events.subscribe(
                              event=>{
  if(event instanceof NavigationStart) {
    console.log('navigation starts');
    this.isLoaded = true;
  }
  else if(event instanceof NavigationEnd) {
    console.log('navigation ends');
    this.isLoaded = false;
    }
  },
  error => {
            this.isLoaded = false;
            console.log(error);
})}

}
