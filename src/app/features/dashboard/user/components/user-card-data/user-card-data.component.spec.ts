import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardDataComponent } from './user-card-data.component';

describe('UserCardDataComponent', () => {
  let component: UserCardDataComponent;
  let fixture: ComponentFixture<UserCardDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserCardDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCardDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
