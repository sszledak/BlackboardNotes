import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackboardContentComponent } from './blackboard-content.component';

describe('BlackboardContentComponent', () => {
  let component: BlackboardContentComponent;
  let fixture: ComponentFixture<BlackboardContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlackboardContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackboardContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
