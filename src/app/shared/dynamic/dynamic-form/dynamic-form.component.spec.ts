import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicFieldComponent } from '../dynamic-field/dynamic-field.component';
import { DatePipe } from '@angular/common';
import { PrimeNgModule } from '../../primeng.module';

describe('DynamicFormComponent', () => {
  let component: DynamicFormComponent;
  let fixture: ComponentFixture<DynamicFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicFormComponent, DynamicFieldComponent ],
      imports: [ ReactiveFormsModule, RouterTestingModule, PrimeNgModule ],
      providers: [ DatePipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormComponent);
    component = fixture.componentInstance;
    component.form = new FormGroup({});
    component.vmDefinition = [];
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
