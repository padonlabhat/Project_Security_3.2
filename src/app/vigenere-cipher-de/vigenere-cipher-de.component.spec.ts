import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VigenereCipherDEComponent } from './vigenere-cipher-de.component';

describe('VigenereCipherDEComponent', () => {
  let component: VigenereCipherDEComponent;
  let fixture: ComponentFixture<VigenereCipherDEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VigenereCipherDEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VigenereCipherDEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
