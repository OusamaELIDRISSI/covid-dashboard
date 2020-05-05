import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Label, Color, MultiDataSet } from 'ng2-charts';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  status = 'confirmed';

  lineChartData: MultiDataSet = [];

  lineChartLabels: Label[] = [];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = false;
  lineChartPlugins = [];
  lineChartType = 'line';

  constructor(private api: ApiService, private datePipe: DatePipe) {
   }

  ngOnInit(): void {
    this.updateChartType();
  }

  updateChartType() {
    const resp = this.api.getDataByStatus(this.status);
    resp.subscribe((dataTmp) => {
      this.lineChartData = dataTmp.map(region => region.Cases);
      this.lineChartLabels = dataTmp.map(region => this.datePipe.transform(region.Date, 'yyyy-MM-dd'));
      ;
    });
  }

}
