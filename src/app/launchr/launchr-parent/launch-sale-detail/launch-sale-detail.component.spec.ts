import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchSaleDetailComponent } from './launch-sale-detail.component';

describe('LaunchSaleDetailComponent', () => {
  let component: LaunchSaleDetailComponent;
  let fixture: ComponentFixture<LaunchSaleDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchSaleDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchSaleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
