import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PotDetailComponent } from './pot-detail.component';

describe('PotDetailComponent', () => {
  let component: PotDetailComponent;
  let fixture: ComponentFixture<PotDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PotDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PotDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
