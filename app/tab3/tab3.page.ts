import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { LabsHeaderComponent } from '../labs-header/labs-header.component';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, LabsHeaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Tab3Page {
  constructor() {}
  A: number[][] = [];
  N: number = 1;
  Matrix(N: any) {
    try {
      this.A = [];
      this.N = parseInt(N);
      if (this.N <= 0) throw new Error('Помилка! Розмір матриці повинен бути більшим за нуль!');
      let i: number = 0, j: number = 0;
      this.A = new Array(this.N);
      for (i = 0; i < this.N; i++) {
        this.A[i] = new Array(this.N);
        for (j = 0; j < this.N; j++) {
          this.A[i][j] = Math.floor(Math.random() * 102) - 50;
        }
      }
    }
    catch (error) { console.log(error); }
  }
  getColor(b: number) {
    if (b < 0 && b > -10 && b % 2 != 0) return 'red';
    else return 'green';
  }
}
