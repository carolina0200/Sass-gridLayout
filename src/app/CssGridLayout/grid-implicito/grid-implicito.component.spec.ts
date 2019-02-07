import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridImplicitoComponent } from './grid-implicito.component';

describe('GridImplicitoComponent', () => {
  let component: GridImplicitoComponent;
  let fixture: ComponentFixture<GridImplicitoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridImplicitoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridImplicitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
