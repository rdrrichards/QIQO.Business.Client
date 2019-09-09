import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTableComponent } from './dashboard-table.component';
import { SharedModule } from 'src/app/shared/shared.module';

describe('DashboardTableComponent', () => {
  let component: DashboardTableComponent;
  let fixture: ComponentFixture<DashboardTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardTableComponent ],
      imports: [ SharedModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
