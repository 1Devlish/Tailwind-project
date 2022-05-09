import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchrFooterComponent } from './launchr-footer.component';

describe('LaunchrFooterComponent', () => {
  let component: LaunchrFooterComponent;
  let fixture: ComponentFixture<LaunchrFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchrFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchrFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
