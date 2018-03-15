import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitComponentComponent } from './git-component.component';

describe('GitComponentComponent', () => {
  let component: GitComponentComponent;
  let fixture: ComponentFixture<GitComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
