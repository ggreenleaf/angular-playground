import { Component, OnInit, Input } from '@angular/core';
import { GridConfig } from '../../classes/grid-config.model';

@Component({
  selector: 'app-local-grid',
  templateUrl: './local-grid.component.html',
  styleUrls: ['./local-grid.component.css']
})
export class LocalGridComponent implements OnInit {
  @Input() gridConfig: GridConfig;
  @Input() data: Array<any>;

  constructor() { }

  ngOnInit() {
    console.log(this.gridConfig);
  }

}
