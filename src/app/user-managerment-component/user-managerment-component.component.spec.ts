import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManagermentComponentComponent } from './user-managerment-component.component';

describe('UserManagermentComponentComponent', () => {
  let component: UserManagermentComponentComponent;
  let fixture: ComponentFixture<UserManagermentComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserManagermentComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserManagermentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
