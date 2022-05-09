import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchrProductsComponent } from './launchr-products.component';

describe('LaunchrProductsComponent', () => {
  let component: LaunchrProductsComponent;
  let fixture: ComponentFixture<LaunchrProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchrProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchrProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
