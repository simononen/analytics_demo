import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrbutionValueComponent } from './distrbution-value.component';

describe('DistrbutionValueComponent', () => {
  let component: DistrbutionValueComponent;
  let fixture: ComponentFixture<DistrbutionValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistrbutionValueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrbutionValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
