import { TestBed } from '@angular/core/testing';
import { SeriesIterationalService } from './series-iterational.service';
describe('SeriesIterationalService', () => {
  let service: SeriesIterationalService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeriesIterationalService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('Тестування методу SeriesIterational()', () => {
    let x: number = -Math.PI;
    let y: number = -1.64493407;
    expect(service.SeriesIterational(x).toFixed(2)).toBe(y.toFixed(2));
  });
  it('Тестування методу SeriesTabulate()', () => {
    let x: number = -Math.PI + 0.2;
    let y: number = -1.3407748;
    expect(service.SeriesTabulate(0.1)[0][2].toFixed(2)).toBe(x.toFixed(2));
    expect(service.SeriesTabulate(0.1)[1][2].toFixed(2)).toBe(y.toFixed(2));
  });
});
