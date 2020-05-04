import { Component, OnInit, Input } from '@angular/core';
import { MultiDataSet, Color, Label } from 'ng2-charts';
import { ChartType, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {

  @Input()
  regions: any[];

  headElements = ['Region', 'Confirmed'];

  doughnutChartData: MultiDataSet = [];
  lineChartColors: Color[] = [
    {
      backgroundColor: '#007bff',
    },
  ];
  doughnutChartType: ChartType = 'horizontalBar';
  barChartLegend = false;
  public doughnutChartOptions: ChartOptions = {
    responsive: true,
  };
  doughnutChartLabels: Label[] = [];

  constructor() { }

  ngOnInit(): void {
    this.doughnutChartLabels = this.regions.map(region => region.name);
    this.doughnutChartData = this.regions.map(region => region.actual);
  }

}
