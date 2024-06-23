import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LabsHeaderComponent } from '../labs-header/labs-header.component';
import { Invoice } from './class/Invoice';
import { Receipt } from './class/Receipt';
import { Waybill } from './class/Waybill';
@Component({
  selector: 'app-lab6',
  templateUrl: './lab6.page.html',
  styleUrls: ['./lab6.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, LabsHeaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Lab6Page implements OnInit {
  showInvoice!: string;
  showReceipt!: string;
  showWaybill!: string;
  constructor() {}
  Result() {
    let invoice = new Invoice(
      "0016154", "25.01.2024", "Microsoft",
      "Ковальчук О. В.", "Windows 11", 1, 1000
    );
    invoice.totalPrice();
    this.showInvoice = invoice.show()
    let receipt = new Receipt(
      "0016154", "25.01.2024", "Microsoft",
      "Ковальчук О. В.", "Придбання Windows", 1, 1000
    );
    receipt.totalPrice();
    this.showReceipt = receipt.show()
    let waybill = new Waybill(
      "0016154", "25.01.2024", "Microsoft",
      "Ковальчук О. В.", "Windows 11", 1, 1000, "шт"
    );
    waybill.totalPrice();
    this.showWaybill = waybill.show()
  }
  ngOnInit() {}
}
