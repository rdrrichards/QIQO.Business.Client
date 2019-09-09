import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { DashboardShellComponent } from './dashboard-shell.component';
import { DashboardItemComponent } from '../dashboard-item/dashboard-item.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardTableComponent } from '../dashboard-table/dashboard-table.component';

describe('DashboardShellComponent', () => {
  let component: DashboardShellComponent;
  let fixture: ComponentFixture<DashboardShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardShellComponent, DashboardItemComponent, DashboardTableComponent ],
      imports: [ HttpClientTestingModule, SharedModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
