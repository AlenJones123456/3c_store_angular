import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProductReadComponent } from './form-product-read.component';

describe('FormProductReadComponent', () => {
  let component: FormProductReadComponent;
  let fixture: ComponentFixture<FormProductReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormProductReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormProductReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
