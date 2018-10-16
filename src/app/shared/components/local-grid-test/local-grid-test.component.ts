import { Component, OnInit } from '@angular/core';
import { GridConfig } from 'src/app/grid/classes/grid-config.model';
import { GridColumn } from 'src/app/grid/classes/grid-column.model';
import { ColumnDataType } from 'src/app/grid/classes/column-data-type.enumeration';

@Component({
  selector: 'app-local-grid-test',
  templateUrl: './local-grid-test.component.html',
  styleUrls: ['./local-grid-test.component.css']
})
export class LocalGridTestComponent implements OnInit {
  config: GridConfig
  data: {test:  string, number: number}[];
  constructor() {
    const columns = [
        new GridColumn('test', ColumnDataType.STRING),
        new GridColumn('number', ColumnDataType.INTEGER)
    ]
    this.config = new GridConfig(columns);
    this.data = [
      {test: 'option 1', number: 2},
      {test: 'option 1', number: 2},
      {test: 'option 1', number: 2},
      {test: 'option 1', number: 2}
    ];
   }

  ngOnInit() {

  }
}
