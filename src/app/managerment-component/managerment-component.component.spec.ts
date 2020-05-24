import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagermentComponentComponent } from './managerment-component.component';

describe('ManagermentComponentComponent', () => {
  let component: ManagermentComponentComponent;
  let fixture: ComponentFixture<ManagermentComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagermentComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagermentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
