import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FleetManagmentComponent } from './fleet-managment.component';

describe('FleetManagmentComponent', () => {
  let component: FleetManagmentComponent;
  let fixture: ComponentFixture<FleetManagmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FleetManagmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FleetManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
