import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDialogBoxComponent } from './searchdialog-box.component';

describe('DialogBoxComponent', () => {
  let component: SearchDialogBoxComponent;
  let fixture: ComponentFixture<SearchDialogBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchDialogBoxComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SearchDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
