import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NombreLineasComponent } from './nombre-lineas.component';

describe('NombreLineasComponent', () => {
  let component: NombreLineasComponent;
  let fixture: ComponentFixture<NombreLineasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NombreLineasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NombreLineasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
