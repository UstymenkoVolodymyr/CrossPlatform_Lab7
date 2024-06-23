import { Component, OnInit, ViewChild, ElementRef, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Chart, registerables } from 'chart.js';
import { LabsHeaderComponent } from '../labs-header/labs-header.component';
@Component({
  selector: 'app-lab2',
  templateUrl: './lab2.page.html',
  styleUrls: ['./lab2.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, LabsHeaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Lab2Page implements OnInit {
  constructor() {Chart.register(...registerables)}
  ngOnInit() {}
  @ViewChild('lineCanvas') private lineCanvas?: ElementRef;
  lineChart: any;
  sx: number = 0;
  fx: number = 0;
  h: number = 0;
  a: number = 0;
  X: string[] = [];
  F: number[] = [];
  F1(x: number): number {
    let n = Math.tan(x + 1) ** 2;
    let d = x ** 4 + 2 * x ** 3 - x;
    return n / d;
  }
  F2(x: number): number {
    let n =  2 * x + 2;
    let d = Math.tan(2 * x - 1) + 1;
    return n / d;
  }
  F3(x: number): number {
    let n = Math.cos((x + 2) ** 2);
    let d = Math.exp(-2 * x) + Math.pow(3 * x ** 2 + 1, 1/4);
    return n / d;
  }
  BuildChart() {
    if (this.lineChart instanceof Chart) {
      this.lineChart.destroy();
    }
    this.lineChart = new Chart(this.lineCanvas?.nativeElement, {
      type: 'line',
      data: {
        labels: this.X,
        datasets: [{
          label: 'Графік функції',
          data: this.F
        }]
      }
    })
  }
  Result(sx: any, fx: any, h: any, a: any) {
    this.sx = parseFloat(sx);
    this.fx = parseFloat(fx);
    this.h = parseFloat(h);
    this.a = parseFloat(a);
    this.X = [];
    this.F = [];
    for (let i = this.sx; i <= this.fx; i += this.h) {
      this.X.push(i.toFixed(1));
      switch(true) {
        case i <= 0: this.F.push(this.F1(i)); break;
        case (i > 0 && i <= this.a): this.F.push(this.F2(i)); break;
        case i > a: this.F.push(this.F3(i)); break;
      }
    }
    this.BuildChart();
  }
}
