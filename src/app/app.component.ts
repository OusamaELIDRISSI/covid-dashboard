import { Component, OnInit } from '@angular/core';
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'covid-dashboard';
  data: any;
  lastUpdate: any;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    const resp = this.api.getData();
    resp.subscribe((data) => {
      this.data = data;
      this.lastUpdate = data.lastUpdate;
    });
  }
}
