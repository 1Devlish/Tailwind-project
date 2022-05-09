import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchrParentComponent } from './launchr-parent.component';

describe('LaunchrParentComponent', () => {
  let component: LaunchrParentComponent;
  let fixture: ComponentFixture<LaunchrParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchrParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchrParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
