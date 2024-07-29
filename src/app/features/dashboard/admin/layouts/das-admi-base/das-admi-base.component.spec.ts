import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasAdmiBaseComponent } from './das-admi-base.component';

describe('DasAdmiBaseComponent', () => {
  let component: DasAdmiBaseComponent;
  let fixture: ComponentFixture<DasAdmiBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DasAdmiBaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DasAdmiBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
