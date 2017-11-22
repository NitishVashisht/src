import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwowaybindingComponent } from './twowaybinding.component';

describe('TwowaybindingComponent', () => {
  let component: TwowaybindingComponent;
  let fixture: ComponentFixture<TwowaybindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwowaybindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwowaybindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
