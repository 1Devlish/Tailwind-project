import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchrProductDetailComponent } from './launchr-product-detail.component';

describe('LaunchrProductDetailComponent', () => {
  let component: LaunchrProductDetailComponent;
  let fixture: ComponentFixture<LaunchrProductDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchrProductDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchrProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
