import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalGridTestComponent } from './local-grid-test.component';

describe('LocalGridTestComponent', () => {
  let component: LocalGridTestComponent;
  let fixture: ComponentFixture<LocalGridTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalGridTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalGridTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
