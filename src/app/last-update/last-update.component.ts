import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-last-update',
  templateUrl: './last-update.component.html',
  styleUrls: ['./last-update.component.css']
})
export class LastUpdateComponent implements OnInit {

  @Input()
  lastUpdate: string;

  constructor() { }

  ngOnInit(): void {
  }

}
