import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserperfiltablaComponent } from './userperfiltabla.component';

describe('UserperfiltablaComponent', () => {
  let component: UserperfiltablaComponent;
  let fixture: ComponentFixture<UserperfiltablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserperfiltablaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserperfiltablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
