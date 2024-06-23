import { Component, OnInit, ViewChild, ElementRef, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LabsHeaderComponent } from '../labs-header/labs-header.component';
import { TabulateService } from './service/tabulate.service';
import { SeriesIterationalService } from './service/series-iterational.service';
import { SeriesRecursiveService } from './service/series-recursive.service';
import { Chart, registerables } from 'chart.js';
@Component({
  selector: 'app-lab7',
  templateUrl: './lab7.page.html',
  styleUrls: ['./lab7.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, LabsHeaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Lab7Page implements OnInit {
  @ViewChild('tabCanvas') private tabCanvas?: ElementRef;
  @ViewChild('itCanvas') private itCanvas?: ElementRef;
  @ViewChild('recCanvas') private recCanvas?: ElementRef;
  funcTab: number[][] = [];
  iterTab: number[][] = [];
  recTab: number[][] = [];
  tabChart: any;
  itChart: any;
  recChart: any;
  constructor(
    private tabService: TabulateService,
    private itService: SeriesIterationalService,
    private recService: SeriesRecursiveService
  ) {Chart.register(...registerables)}
  ngOnInit() {}
  BuildChart() {
    if (this.tabChart instanceof Chart) {
      this.tabChart.destroy();
    }
    if (this.itChart instanceof Chart) {
      this.itChart.destroy();
    }
    if (this.recChart instanceof Chart) {
      this.recChart.destroy();
    }
    this.tabChart = new Chart(this.tabCanvas?.nativeElement, {
      type: 'line',
      data: {
        labels: this.funcTab[0],
        datasets: [{
          label: 'Табулювання функції',
          data: this.funcTab[1]
        }]
      }
    })
    this.itChart = new Chart(this.itCanvas?.nativeElement, {
      type: 'line',
      data: {
        labels: this.funcTab[0],
        datasets: [{
          label: 'Табулювання ітеративної суми ряду',
          data: this.iterTab[1]
        }]
      }
    })
    this.recChart = new Chart(this.recCanvas?.nativeElement, {
      type: 'line',
      data: {
        labels: this.funcTab[0],
        datasets: [{
          label: 'Табулювання рекурсивної суми ряду',
          data: this.recTab[1]
        }]
      }
    })
  }
  Result(input: any) {
    let h: number = parseFloat(input);
    console.log("Табулювання функції:");
    this.funcTab = this.tabService.Tabulate(h);
    console.log("Табулювання ітеративної суми ряду:");
    this.iterTab = this.itService.SeriesTabulate(h);
    console.log("Табулювання рекурсивної суми ряду:");
    this.recTab = this.recService.SeriesTabulate(h);
    this.BuildChart();
  }
}
