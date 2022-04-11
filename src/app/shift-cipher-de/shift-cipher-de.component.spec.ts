import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftCipherDEComponent } from './shift-cipher-de.component';

describe('ShiftCipherDEComponent', () => {
  let component: ShiftCipherDEComponent;
  let fixture: ComponentFixture<ShiftCipherDEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShiftCipherDEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiftCipherDEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
