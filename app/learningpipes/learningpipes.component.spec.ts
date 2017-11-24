import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningpipesComponent } from './learningpipes.component';

describe('LearningpipesComponent', () => {
  let component: LearningpipesComponent;
  let fixture: ComponentFixture<LearningpipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningpipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningpipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
