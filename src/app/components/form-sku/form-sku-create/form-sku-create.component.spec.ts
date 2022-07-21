import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSkuCreateComponent } from './form-sku-create.component';

describe('FormSkuCreateComponent', () => {
  let component: FormSkuCreateComponent;
  let fixture: ComponentFixture<FormSkuCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSkuCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormSkuCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
