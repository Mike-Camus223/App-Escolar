import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilConteoAdmiComponent } from './perfil-conteo-admi.component';

describe('PerfilConteoAdmiComponent', () => {
  let component: PerfilConteoAdmiComponent;
  let fixture: ComponentFixture<PerfilConteoAdmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PerfilConteoAdmiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilConteoAdmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
