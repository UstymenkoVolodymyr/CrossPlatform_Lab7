import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoadingController} from '@ionic/angular';
import { LabsHeaderComponent } from '../labs-header/labs-header.component';
@Component({
  selector: 'app-lab3',
  templateUrl: './lab3.page.html',
  styleUrls: ['./lab3.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, LabsHeaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Lab3Page implements OnInit {
  loading: any;
  dataURL = "https://api.jsonbin.io/v3/b/663a4bafad19ca34f865dc3b";
  data: any = [];
  data_users: any = [];
  constructor(public loadingController: LoadingController) {}
  async load() {
    this.loading = await this.loadingController.create({
      spinner: "circles",
      message: "Завантаження"
    });
    await this.loading.present();
    fetch(this.dataURL, {
      headers: {
        'X-Master-Key': "$2a$10$eHKvC0sEACV81cyn9BhnGO0JOZkiE3U8bJaR9.hTVyoBaIvxdVfRm"
      }
    }).then( res => res.json())
    .then(json => {
      this.data = json;
      this.data = this.data.record;
      let i = 0;
      while (this.data[i] != undefined) {
        this.data_users.push(this.data[i][0]);
        i++;
      }
      this.loading.dismiss();
    });
 }
  getColor(g: any, item: any) {
    if (g == item.group) return 'red';
    else return 'green';
  }
  ngOnInit() {}
}
