import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelDeCursosComponent } from './panel-de-cursos.component';

describe('PanelDeCursosComponent', () => {
  let component: PanelDeCursosComponent;
  let fixture: ComponentFixture<PanelDeCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PanelDeCursosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelDeCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
