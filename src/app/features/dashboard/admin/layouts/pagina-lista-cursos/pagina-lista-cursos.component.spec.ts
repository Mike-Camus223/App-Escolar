import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaListaCursosComponent } from './pagina-lista-cursos.component';

describe('PaginaListaCursosComponent', () => {
  let component: PaginaListaCursosComponent;
  let fixture: ComponentFixture<PaginaListaCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginaListaCursosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaListaCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
