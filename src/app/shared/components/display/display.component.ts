import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/services/test.service';
import { Observable } from 'rxjs';
import { Demo } from 'src/app/models/demo.model';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  show = true
  demo$: Observable<Demo>;
  constructor(
    private testService: TestService
  ) { }

  ngOnInit() {
    this.demo$ = this.testService.getData(); 
  }

}
