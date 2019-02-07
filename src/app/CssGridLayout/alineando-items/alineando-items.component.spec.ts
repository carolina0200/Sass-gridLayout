import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlineandoItemsComponent } from './alineando-items.component';

describe('AlineandoItemsComponent', () => {
  let component: AlineandoItemsComponent;
  let fixture: ComponentFixture<AlineandoItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlineandoItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlineandoItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
