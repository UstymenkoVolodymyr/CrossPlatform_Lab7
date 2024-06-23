import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LabsHeaderComponent } from '../labs-header/labs-header.component';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, LabsHeaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Tab2Page {
  constructor() {}
  a: number = 0;
  b: number = 0;
  c: number = 0;
  Result(a: any, b: any) {
    try {
      this.a = parseInt(a);
      this.b = parseInt(b);
      this.c = 0;
      if (this.a > this.b) throw new Error('Помилка! Число a повинно бути меншим або дорівнювати числу b!');
      for (let i = this.a; i <= this.b; i++) {
        if (i % 2 == 0 && i % 3 == 2) this.c++;
      }
    }
    catch (error) { console.log(error); }
  }
}
