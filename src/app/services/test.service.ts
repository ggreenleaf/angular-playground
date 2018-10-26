import { Injectable } from '@angular/core';
import { Demo } from '../models/demo.model';
import { Observable, Subject, of, timer } from 'rxjs';
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


  getTestDemos(): Demo[] {
    return [
      new Demo('option 1', Math.floor(Math.random() * 10) + 1 ),
      new Demo('option 2', Math.floor(Math.random() * 10) + 1 ),
      new Demo('option 3', Math.floor(Math.random() * 10) + 1 ),
      new Demo('option 4', Math.floor(Math.random() * 10) + 1 ),
      new Demo('option 5', Math.floor(Math.random() * 10) + 1 )
    ];
  }

  getDemoOverTime(): Observable<Demo[]> {
    return timer(0,5000).pipe( 
      delay(2000),
      map(_ => this.getTestDemos()),
      map((demos: Demo[]) => {
        if (demos[0].number > 7) {
          throw new Error('Demo 0 is to big');
        }
        return demos;
      })
    );
  }
}
