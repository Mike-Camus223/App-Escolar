import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasUserBaseComponent } from './das-user-base.component';

describe('DasUserBaseComponent', () => {
  let component: DasUserBaseComponent;
  let fixture: ComponentFixture<DasUserBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DasUserBaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DasUserBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
