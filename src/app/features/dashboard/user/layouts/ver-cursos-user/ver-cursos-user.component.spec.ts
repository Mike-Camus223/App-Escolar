import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerCursosUserComponent } from './ver-cursos-user.component';

describe('VerCursosUserComponent', () => {
  let component: VerCursosUserComponent;
  let fixture: ComponentFixture<VerCursosUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerCursosUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerCursosUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
