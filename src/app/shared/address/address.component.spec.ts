import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { AddressComponent } from './address.component';
import { DynamicFormComponent } from '../dynamic/dynamic-form/dynamic-form.component';
import { DynamicFieldComponent } from '../dynamic/dynamic-field/dynamic-field.component';
import { PrimeNgModule } from '../primeng.module';
import { DatePipe } from '@angular/common';
import { AddressType } from 'src/app/models/enums';

describe('AddressComponent', () => {
  let component: AddressComponent;
  let fixture: ComponentFixture<AddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressComponent, DynamicFormComponent, DynamicFieldComponent ],
      imports: [ PrimeNgModule, ReactiveFormsModule, RouterTestingModule ],
      providers: [DatePipe]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressComponent);
    component = fixture.componentInstance;
    component.address = {
      addressKey: 0,
      addressType: AddressType.Mailing,
      entityKey: 0,
      entityType: 0,
      addressLine1: 'string;',
      addressCity: 'string;',
      addressState: 'string;',
      addressCounty: 'string;',
      addressCountry: 'string;',
      addressPostalCode: 'string;',
      addressDefaultFlag: false,
      addressActiveFlag: false,
      addedUserID: 'string;',
      addedDateTime: new Date()
    };
    component.addressFormDef = [{ key: 'addressLine3', type: 'string', label: 'Address Line 3' }];
    component.addressTypes = [];
    component.countries = [];
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
