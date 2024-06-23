import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-labs-header',
  templateUrl: './labs-header.component.html',
  styleUrls: ['./labs-header.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class LabsHeaderComponent  implements OnInit {
  @Input() name!: string;
  constructor() {}
  ngOnInit() {}
}
