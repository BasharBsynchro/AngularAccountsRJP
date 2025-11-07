import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCustomerDialogBoxComponent } from './addcstrdialog-box.component';

describe('DialogBoxComponent', () => {
  let component: AddCustomerDialogBoxComponent;
  let fixture: ComponentFixture<AddCustomerDialogBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCustomerDialogBoxComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AddCustomerDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
