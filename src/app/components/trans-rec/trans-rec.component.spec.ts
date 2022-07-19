import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransRecComponent } from './trans-rec.component';

describe('TransRecComponent', () => {
  let component: TransRecComponent;
  let fixture: ComponentFixture<TransRecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransRecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransRecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
