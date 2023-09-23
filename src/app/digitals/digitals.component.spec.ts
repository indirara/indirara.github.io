import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalsComponent } from './digitals.component';

describe('DigitalsComponent', () => {
  let component: DigitalsComponent;
  let fixture: ComponentFixture<DigitalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DigitalsComponent]
    });
    fixture = TestBed.createComponent(DigitalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
