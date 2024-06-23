import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PrintedProduct } from './class/PrintedProduct';
import { Magazine } from './class/Magazine';
import { Newspaper } from './class/Newspaper';
import { LabsHeaderComponent } from '../labs-header/labs-header.component';
@Component({
  selector: 'app-lab4',
  templateUrl: './lab4.page.html',
  styleUrls: ['./lab4.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, LabsHeaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Lab4Page implements OnInit {
  pp: PrintedProduct[] = [];
  avm: number = 0;
  avp: number = 0;
  constructor() {}
  getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max) + 1);
  }
  Result(nn: any) {
    try {
      this.pp = new Array();
      let n = parseInt(nn);
      if (n < 5) throw new Error("Кількість об'єктів має бути більшою або дорівнювати 5!");
      for (let i = 0; i < n; i++) {
        this.pp.push(
          new Magazine("Журнал", this.getRandomInt(1000000), this.getRandomInt(100))
        );
        this.pp.push(
          new Newspaper("Газета", this.getRandomInt(1000000), this.getRandomInt(10), this.getRandomInt(10))
        );
      }
      this.pp.forEach((element) => {
        if (element instanceof Magazine) { this.avm += element.CirculationCost() / n; }
        if (element instanceof Newspaper) { this.avp += element.CirculationCost() / n; }
      });
    } catch (error) { alert(error); }
  }
  ngOnInit() {}
}
