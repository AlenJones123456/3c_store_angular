import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditTableComponent } from './form-edit-table.component';

describe('FormEditTableComponent', () => {
  let component: FormEditTableComponent;
  let fixture: ComponentFixture<FormEditTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEditTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEditTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
