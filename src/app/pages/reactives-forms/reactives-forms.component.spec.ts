import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivesFormsComponent } from './reactives-forms.component';

describe('ReactivesFormsComponent', () => {
  let component: ReactivesFormsComponent;
  let fixture: ComponentFixture<ReactivesFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactivesFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactivesFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
