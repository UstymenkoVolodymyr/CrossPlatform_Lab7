import { Injectable } from '@angular/core';
import { LogService } from './log.service';
@Injectable({
  providedIn: 'root'
})
export class SeriesRecursiveService {
  F(x: number, i: number): number {
    let s: number = (-1)**(i+1) * Math.cos(i*x) / i**2;
    if (Math.abs(s) <= 1e-6) return 0;
    return s + this.F(x, i + 1);
  }
  SeriesRecursive(x: number): number {
    return this.F(x, 1);
  }
  SeriesTabulate(h: number): number[][] {
    let sx = -Math.PI;
    let fx = Math.PI;
    let tab: number[][] = [[], []];
    for (let i = sx; i <= fx; i += h) {
      let line: string = "X: " + i + " Y:" + this.SeriesRecursive(i);
      this.logger.write(line);
      tab[0].push(i);
      tab[1].push(this.SeriesRecursive(i));
    }
    return tab;
  }
  constructor(private logger: LogService) {}
}
