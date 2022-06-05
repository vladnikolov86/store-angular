import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasWrapComponent } from './canvas-wrap.component';

describe('CanvasWrapComponent', () => {
  let component: CanvasWrapComponent;
  let fixture: ComponentFixture<CanvasWrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanvasWrapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasWrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
