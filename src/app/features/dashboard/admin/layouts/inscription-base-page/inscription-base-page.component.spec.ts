import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionBasePageComponent } from './inscription-base-page.component';

describe('InscriptionBasePageComponent', () => {
  let component: InscriptionBasePageComponent;
  let fixture: ComponentFixture<InscriptionBasePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InscriptionBasePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscriptionBasePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
