import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasPageUserComponent } from './das-page-user.component';

describe('DasPageUserComponent', () => {
  let component: DasPageUserComponent;
  let fixture: ComponentFixture<DasPageUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DasPageUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DasPageUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
