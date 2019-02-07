import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ROWSIZEComponent } from './row-size.component';

describe('ROWSIZEComponent', () => {
  let component: ROWSIZEComponent;
  let fixture: ComponentFixture<ROWSIZEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ROWSIZEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ROWSIZEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
