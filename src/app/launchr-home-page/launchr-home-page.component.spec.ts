import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchrHomePageComponent } from './launchr-home-page.component';

describe('LaunchrHomePageComponent', () => {
  let component: LaunchrHomePageComponent;
  let fixture: ComponentFixture<LaunchrHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchrHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchrHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
