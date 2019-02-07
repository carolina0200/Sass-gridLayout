import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaciadoComponent } from './espaciado.component';

describe('EspaciadoComponent', () => {
  let component: EspaciadoComponent;
  let fixture: ComponentFixture<EspaciadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspaciadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspaciadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
