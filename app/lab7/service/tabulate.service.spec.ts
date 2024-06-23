import { TestBed } from '@angular/core/testing';
import { TabulateService } from './tabulate.service';
describe('TabulateService', () => {
  let service: TabulateService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabulateService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('Тестування методу F()', () => {
    let x: number = -Math.PI;
    let y: number = -1.64493407;
    expect(service.F(x).toFixed(2)).toBe(y.toFixed(2));
  });
  it('Тестування методу Tabulate()', () => {
    let x: number = -Math.PI + 0.2;
    let y: number = -1.3407748;
    expect(service.Tabulate(0.1)[0][2].toFixed(2)).toBe(x.toFixed(2));
    expect(service.Tabulate(0.1)[1][2].toFixed(2)).toBe(y.toFixed(2));
  });
});
