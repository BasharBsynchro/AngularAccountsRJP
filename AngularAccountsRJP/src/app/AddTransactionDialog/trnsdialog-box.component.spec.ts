import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionDialogBoxComponent } from './trnsdialog-box.component';

describe('DialogBoxComponent', () => {
  let component: TransactionDialogBoxComponent;
  let fixture: ComponentFixture<TransactionDialogBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionDialogBoxComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TransactionDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
