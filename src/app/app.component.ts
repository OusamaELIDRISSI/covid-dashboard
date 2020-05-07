import { Component, OnInit } from '@angular/core';
import { ApiService } from './service/api.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'covid-dashboard';
  data: any;
  lastUpdate: any;

  constructor(private api: ApiService,
              private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {
    const resp = this.api.getData();
    resp.subscribe((data) => {
      this.data = data;
      this.lastUpdate = data.lastUpdate;
    });
  }

  selectChangeHandler(event: any) {
    this.translate.use(event.target.value);
  }
}
