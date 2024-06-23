import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lab2Page } from './lab2.page';
describe('Lab2Page', () => {
  let component: Lab2Page;
  let fixture: ComponentFixture<Lab2Page>;
  beforeEach(async () => {
    fixture = TestBed.createComponent(Lab2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
