import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSkuSearchComponent } from './form-sku-search.component';

describe('FormSkuSearchComponent', () => {
  let component: FormSkuSearchComponent;
  let fixture: ComponentFixture<FormSkuSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSkuSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormSkuSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
