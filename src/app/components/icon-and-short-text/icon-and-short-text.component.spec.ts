import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconAndShortTextComponent } from './icon-and-short-text.component';

describe('IconAndShortTextComponent', () => {
  let component: IconAndShortTextComponent;
  let fixture: ComponentFixture<IconAndShortTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconAndShortTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconAndShortTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
