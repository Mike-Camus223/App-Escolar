import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelloginadminComponent } from './panelloginadmin.component';

describe('PanelloginadminComponent', () => {
  let component: PanelloginadminComponent;
  let fixture: ComponentFixture<PanelloginadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PanelloginadminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelloginadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
