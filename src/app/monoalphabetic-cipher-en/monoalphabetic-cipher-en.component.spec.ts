import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonoalphabeticCipherENComponent } from './monoalphabetic-cipher-en.component';

describe('MonoalphabeticCipherENComponent', () => {
  let component: MonoalphabeticCipherENComponent;
  let fixture: ComponentFixture<MonoalphabeticCipherENComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonoalphabeticCipherENComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonoalphabeticCipherENComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
