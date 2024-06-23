import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LabsHeaderComponent } from '../labs-header/labs-header.component';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, LabsHeaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Tab1Page {
  constructor() {}
  a: number = 0;
  b: number = 0;
  c: number = 0;
  d: number = 0;
  Result(a: any, b: any, c: any) {
    this.a = parseInt(a);
    this.b = parseInt(b);
    this.c = parseInt(c);
    this.d = 0;
    if (this.a % 27 == 0) this.d++;
    if (this.b % 27 == 0) this.d++;
    if (this.c % 27 == 0) this.d++;
  }
}
