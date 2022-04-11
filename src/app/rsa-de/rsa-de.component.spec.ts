import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RSADEComponent } from './rsa-de.component';

describe('RSADEComponent', () => {
  let component: RSADEComponent;
  let fixture: ComponentFixture<RSADEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RSADEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RSADEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
