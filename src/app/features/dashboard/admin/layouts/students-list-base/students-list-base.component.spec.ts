import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsListBaseComponent } from './students-list-base.component';

describe('StudentsListBaseComponent', () => {
  let component: StudentsListBaseComponent;
  let fixture: ComponentFixture<StudentsListBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentsListBaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsListBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
