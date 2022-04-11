import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RSAENComponent } from './rsa-en.component';

describe('RSAENComponent', () => {
  let component: RSAENComponent;
  let fixture: ComponentFixture<RSAENComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RSAENComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RSAENComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
