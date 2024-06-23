import { Invoice } from "./Invoice";
export class Waybill extends Invoice {
    measurement!: string;
    constructor(
        nn: string, date: string, seller: string, buyer: string,
        ware_d: string, ware_n: number, unit_p: number, m: string
    ) {
        if (ware_n < 0) throw new Error ("ware_number < 0!");
        if (unit_p < 0) throw new Error ("unit_price < 0!");
        super(nn, date, seller, buyer, ware_d, ware_n, unit_p);
        this.measurement = m;
    }
    override show() {
        let a = "\nНомер документа: " + this.nn + "\nДата складання: " + this.date;
        let b = "\nПродавець: "+ this.seller + "\nПокупець: "+ this.buyer;
        let c = "\nОпис товарів: " + this.ware_description + "\nКількість товарів: " + this.ware_number + this.measurement;
        let d = "\nЦіна за одиницю: "+ this.unit_price + "\nСума до сплати: "+ this.total_price;
        return a + b + c + d;
    }
}