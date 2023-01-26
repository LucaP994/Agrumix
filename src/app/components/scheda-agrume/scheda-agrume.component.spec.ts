import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedaAgrumeComponent } from './scheda-agrume.component';

describe('SchedaAgrumeComponent', () => {
  let component: SchedaAgrumeComponent;
  let fixture: ComponentFixture<SchedaAgrumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedaAgrumeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchedaAgrumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
