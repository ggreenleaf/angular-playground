import { Injectable } from '@angular/core';
import { Demo } from '../models/demo.model';
import { Observable, Subject, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  getData(): Observable<Demo> {
    return of(this.getDemoData())
      .pipe(
        delay(4000)
      );
  }

  getDemoData(): Demo {
    const text = "yay text";
    const num = Math.floor(Math.random() * 10) + 1
    return new Demo(text, num);
  }
}
