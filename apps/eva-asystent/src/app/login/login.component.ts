import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ev-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public selLanguage: string;

  constructor(public translate: TranslateService
    ) { }

  ngOnInit() {
    this.selLanguage = this.translate.getDefaultLang();
  }

}
