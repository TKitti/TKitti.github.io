import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeforeAfterImageSliderComponent } from './before-after-image-slider.component';

describe('BeforeAfterImageSliderComponent', () => {
  let component: BeforeAfterImageSliderComponent;
  let fixture: ComponentFixture<BeforeAfterImageSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeforeAfterImageSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeforeAfterImageSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
