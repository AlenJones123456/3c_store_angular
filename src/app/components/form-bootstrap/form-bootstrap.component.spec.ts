import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBootstrapComponent } from './form-bootstrap.component';

describe('FormBootstrapComponent', () => {
  let component: FormBootstrapComponent;
  let fixture: ComponentFixture<FormBootstrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBootstrapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
