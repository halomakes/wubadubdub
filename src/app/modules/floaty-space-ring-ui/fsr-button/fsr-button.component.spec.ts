import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FsrButtonComponent } from './fsr-button.component';

describe('FsrButtonComponent', () => {
  let component: FsrButtonComponent;
  let fixture: ComponentFixture<FsrButtonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FsrButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FsrButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
