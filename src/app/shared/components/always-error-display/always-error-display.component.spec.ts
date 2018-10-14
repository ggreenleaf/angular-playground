import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlwaysErrorDisplayComponent } from './always-error-display.component';

describe('AlwaysErrorDisplayComponent', () => {
  let component: AlwaysErrorDisplayComponent;
  let fixture: ComponentFixture<AlwaysErrorDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlwaysErrorDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlwaysErrorDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
