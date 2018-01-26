import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriorityofstylesComponent } from './priorityofstyles.component';

describe('PriorityofstylesComponent', () => {
  let component: PriorityofstylesComponent;
  let fixture: ComponentFixture<PriorityofstylesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriorityofstylesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriorityofstylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
