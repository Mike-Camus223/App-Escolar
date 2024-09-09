import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewchartdonutComponent } from './newchartdonut.component';

describe('NewchartdonutComponent', () => {
  let component: NewchartdonutComponent;
  let fixture: ComponentFixture<NewchartdonutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewchartdonutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewchartdonutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
