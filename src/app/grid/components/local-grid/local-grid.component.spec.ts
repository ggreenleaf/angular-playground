import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalGridComponent } from './local-grid.component';

describe('LocalGridComponent', () => {
  let component: LocalGridComponent;
  let fixture: ComponentFixture<LocalGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
