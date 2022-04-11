import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VigenereCipherENComponent } from './vigenere-cipher-en.component';

describe('VigenereCipherENComponent', () => {
  let component: VigenereCipherENComponent;
  let fixture: ComponentFixture<VigenereCipherENComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VigenereCipherENComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VigenereCipherENComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
