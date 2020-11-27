import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusLatestComponent } from './status-latest.component';

describe('StatusLatestComponent', () => {
  let component: StatusLatestComponent;
  let fixture: ComponentFixture<StatusLatestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusLatestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusLatestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
