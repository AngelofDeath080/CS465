import { ComponentFixture, TestBed } from '@angular/core/testing';

import { editTrip } from './edit-trip';

describe('EditTrip', () => {
  let component: editTrip;
  let fixture: ComponentFixture<editTrip>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [editTrip]
    })
    .compileComponents();

    fixture = TestBed.createComponent(editTrip);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
