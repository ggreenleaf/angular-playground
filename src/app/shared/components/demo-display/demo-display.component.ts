import { Component, OnInit, Input } from '@angular/core';
import { Demo } from 'src/app/models/demo.model';

@Component({
  selector: 'app-demo-display',
  templateUrl: './demo-display.component.html',
  styleUrls: ['./demo-display.component.css']
})
export class DemoDisplayComponent implements OnInit {
  @Input() demo: Demo;
  
  constructor() { }

  ngOnInit() {
  }

}
