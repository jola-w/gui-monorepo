import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ConfigService } from '../../shared/services/config.service';

@Component({
  selector: 'ev-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  public selLanguage: string;

  constructor(
    public translate: TranslateService,
    private configService: ConfigService
  ) { }

  ngOnInit(): void {
    this.selLanguage = this.translate.getDefaultLang();
    this.configService.setLanguage(this.selLanguage);
  }

  switchLang(lang: string) {
    this.translate.use(lang);
    this.selLanguage  = lang;
    this.configService.setLanguage(lang);
  }

}
