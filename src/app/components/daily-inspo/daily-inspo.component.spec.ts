import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyInspoComponent } from './daily-inspo.component';

describe('DailyInspoComponent', () => {
  let component: DailyInspoComponent;
  let fixture: ComponentFixture<DailyInspoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyInspoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyInspoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
