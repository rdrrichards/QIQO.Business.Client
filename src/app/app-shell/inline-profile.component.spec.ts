import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineProfileComponent } from './inline-profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('InlineProfileComponent', () => {
  let component: InlineProfileComponent;
  let fixture: ComponentFixture<InlineProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InlineProfileComponent ],
      imports: [ BrowserAnimationsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
