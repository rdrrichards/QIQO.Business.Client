import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickCreateDialogComponent } from './quick-create-dialog.component';
import { SharedModule } from '../shared.module';

describe('QuickCreateDialogComponent', () => {
  let component: QuickCreateDialogComponent;
  let fixture: ComponentFixture<QuickCreateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickCreateDialogComponent ],
      imports: [SharedModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
