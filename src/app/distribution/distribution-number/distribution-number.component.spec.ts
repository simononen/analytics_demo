import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributionNumberComponent } from './distribution-number.component';

describe('DistributionNumberComponent', () => {
  let component: DistributionNumberComponent;
  let fixture: ComponentFixture<DistributionNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistributionNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributionNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
