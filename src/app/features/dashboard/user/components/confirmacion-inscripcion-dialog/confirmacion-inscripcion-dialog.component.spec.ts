import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacionInscripcionDialogComponent } from './confirmacion-inscripcion-dialog.component';

describe('ConfirmacionInscripcionDialogComponent', () => {
  let component: ConfirmacionInscripcionDialogComponent;
  let fixture: ComponentFixture<ConfirmacionInscripcionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfirmacionInscripcionDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmacionInscripcionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
