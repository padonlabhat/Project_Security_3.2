import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonoalphabeticCipherDEComponent } from './monoalphabetic-cipher-de.component';

describe('MonoalphabeticCipherDEComponent', () => {
  let component: MonoalphabeticCipherDEComponent;
  let fixture: ComponentFixture<MonoalphabeticCipherDEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonoalphabeticCipherDEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonoalphabeticCipherDEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
