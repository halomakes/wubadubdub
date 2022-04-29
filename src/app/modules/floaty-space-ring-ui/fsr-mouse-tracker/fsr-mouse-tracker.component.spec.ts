import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FsrMouseTrackerComponent } from './fsr-mouse-tracker.component';

describe('FsrMouseTrackerComponent', () => {
  let component: FsrMouseTrackerComponent;
  let fixture: ComponentFixture<FsrMouseTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FsrMouseTrackerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FsrMouseTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
