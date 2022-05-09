import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToParticipatePageComponent } from './how-to-participate-page.component';

describe('HowToParticipatePageComponent', () => {
  let component: HowToParticipatePageComponent;
  let fixture: ComponentFixture<HowToParticipatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowToParticipatePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowToParticipatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
