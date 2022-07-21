import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreateRestockComponent } from './form-create-restock.component';

describe('FormCreateRestockComponent', () => {
  let component: FormCreateRestockComponent;
  let fixture: ComponentFixture<FormCreateRestockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCreateRestockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCreateRestockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
