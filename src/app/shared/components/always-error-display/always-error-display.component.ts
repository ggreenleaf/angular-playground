import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-always-error-display',
  templateUrl: './always-error-display.component.html',
  styleUrls: ['./always-error-display.component.css']
})
export class AlwaysErrorDisplayComponent implements OnInit {
  @Input() demo: string
  constructor() { }

  ngOnInit() {
  }

}
