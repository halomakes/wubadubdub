import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FsrTileButtonComponent } from './fsr-tile-button.component';

describe('FsrTileButtonComponent', () => {
  let component: FsrTileButtonComponent;
  let fixture: ComponentFixture<FsrTileButtonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FsrTileButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FsrTileButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
