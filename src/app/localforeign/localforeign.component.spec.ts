import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalforeignComponent } from './localforeign.component';

describe('LocalforeignComponent', () => {
  let component: LocalforeignComponent;
  let fixture: ComponentFixture<LocalforeignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalforeignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalforeignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
