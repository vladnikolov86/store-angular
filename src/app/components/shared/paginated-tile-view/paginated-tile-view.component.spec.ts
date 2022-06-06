import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatedTileViewComponent } from './paginated-tile-view.component';

describe('PaginatedTileViewComponent', () => {
  let component: PaginatedTileViewComponent;
  let fixture: ComponentFixture<PaginatedTileViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginatedTileViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatedTileViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
