import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lab6Page } from './lab6.page';
describe('Lab6Page', () => {
  let component: Lab6Page;
  let fixture: ComponentFixture<Lab6Page>;
  beforeEach(async() => {
    fixture = TestBed.createComponent(Lab6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
