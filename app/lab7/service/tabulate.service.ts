import { Injectable } from '@angular/core';
import { LogService } from './log.service';
@Injectable({
  providedIn: 'root'
})
export class TabulateService {
  F(x: number): number {
    return (Math.PI * Math.PI - 3 * x * x) / 12;
  }
  Tabulate(h: number): number[][] {
    let sx = -Math.PI;
    let fx = Math.PI;
    let tab: number[][] = [[], []];
    for (let i = sx; i <= fx; i += h) {
      let line: string = "X: " + i + " Y:" + this.F(i);
      this.logger.write(line);
      tab[0].push(i);
      tab[1].push(this.F(i));
    }
    return tab;
  }
  constructor(private logger: LogService) {}
}
