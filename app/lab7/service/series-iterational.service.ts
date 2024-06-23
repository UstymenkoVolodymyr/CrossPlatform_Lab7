import { Injectable } from '@angular/core';
import { LogService } from './log.service';
@Injectable({
  providedIn: 'root'
})
export class SeriesIterationalService {
  SeriesIterational(x: number): number {
    let sum: number = 0;
    let s: number = 0;
    let i: number = 1;
    do {
      s = (-1)**(i+1) * Math.cos(i*x) / i**2;
      sum += s;
      i += 1;
    }
    while (Math.abs(s) > 1e-6)
    return sum;
  }
  SeriesTabulate(h: number): number[][] {
    let sx = -Math.PI;
    let fx = Math.PI;
    let tab: number[][] = [[], []];
    for (let i = sx; i <= fx; i += h) {
      let line: string = "X: " + i + " Y:" + this.SeriesIterational(i);
      this.logger.write(line);
      tab[0].push(i);
      tab[1].push(this.SeriesIterational(i));
    }
    return tab;
  }
  constructor(private logger: LogService) {}
}
