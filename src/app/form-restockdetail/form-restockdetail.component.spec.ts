import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSampleComponent } from './form-restockdetail.component';

describe('FormSampleComponent', () => {
  let component: FormSampleComponent;
  let fixture: ComponentFixture<FormSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});