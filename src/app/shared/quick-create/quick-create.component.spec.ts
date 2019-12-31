import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickCreateComponent } from './quick-create.component';

describe('QuickCreateComponent', () => {
  let component: QuickCreateComponent;
  let fixture: ComponentFixture<QuickCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
