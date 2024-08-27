import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbaseComponent } from './dashbase.component';

describe('DashbaseComponent', () => {
  let component: DashbaseComponent;
  let fixture: ComponentFixture<DashbaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashbaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashbaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
