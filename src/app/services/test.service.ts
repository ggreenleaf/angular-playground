import { Injectable } from '@angular/core';
import { Demo } from '../models/demo.model';
import { Observable, Subject, of } from 'rxjs';
import { delay, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  getData(): Observable<Demo> {
    const demoData = this.getDemoData();

    return of(demoData)
      .pipe(
        delay(2000),
        map(d => {
          if (d.number > 5) {
            throw new Error("number in demo to big");
          }
          return d;
        })
      );
  }

  getDemoData(): Demo {
    const text = "yay text";
    const num = Math.floor(Math.random() * 10) + 1
    return new Demo(text, num);
  }
}
