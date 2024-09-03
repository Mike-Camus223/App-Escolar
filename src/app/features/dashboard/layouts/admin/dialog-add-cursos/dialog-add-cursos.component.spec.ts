import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddCursosComponent } from './dialog-add-cursos.component';

describe('DialogAddCursosComponent', () => {
  let component: DialogAddCursosComponent;
  let fixture: ComponentFixture<DialogAddCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogAddCursosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
