import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftCipherENComponent } from './shift-cipher-en.component';

describe('ShiftCipherENComponent', () => {
  let component: ShiftCipherENComponent;
  let fixture: ComponentFixture<ShiftCipherENComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShiftCipherENComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiftCipherENComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
