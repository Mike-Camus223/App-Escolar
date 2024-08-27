import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelDeIncripcionesComponent } from './panel-de-incripciones.component';

describe('PanelDeIncripcionesComponent', () => {
  let component: PanelDeIncripcionesComponent;
  let fixture: ComponentFixture<PanelDeIncripcionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PanelDeIncripcionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelDeIncripcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
