/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GraduatesurveysComponent } from './graduatesurveys.component';

describe('GraduatesurveysComponent', () => {
  let component: GraduatesurveysComponent;
  let fixture: ComponentFixture<GraduatesurveysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraduatesurveysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraduatesurveysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
