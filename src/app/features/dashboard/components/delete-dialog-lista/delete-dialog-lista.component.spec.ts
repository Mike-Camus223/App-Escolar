import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDialogListaComponent } from './delete-dialog-lista.component';

describe('DeleteDialogListaComponent', () => {
  let component: DeleteDialogListaComponent;
  let fixture: ComponentFixture<DeleteDialogListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteDialogListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteDialogListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
