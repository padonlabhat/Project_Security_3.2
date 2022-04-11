import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodecopyComponent } from './codecopy.component';

describe('CodecopyComponent', () => {
  let component: CodecopyComponent;
  let fixture: ComponentFixture<CodecopyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodecopyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodecopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
