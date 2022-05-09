import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBasicDetailComponent } from './project-basic-detail.component';

describe('ProjectBasicDetailComponent', () => {
  let component: ProjectBasicDetailComponent;
  let fixture: ComponentFixture<ProjectBasicDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectBasicDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectBasicDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
