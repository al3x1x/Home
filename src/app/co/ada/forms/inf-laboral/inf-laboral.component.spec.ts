import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfLaboralComponent } from './inf-laboral.component';

describe('InfLaboralComponent', () => {
  let component: InfLaboralComponent;
  let fixture: ComponentFixture<InfLaboralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfLaboralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfLaboralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
