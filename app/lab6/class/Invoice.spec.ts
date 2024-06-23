import { Invoice } from "./Invoice";
describe("Тестування класу Invoice", () => {
    let invoice: Invoice;
    beforeEach(() => {
        invoice = new Invoice(
            "0016154", "25.01.2024", "Microsoft",
            "Ковальчук О. В.", "Windows 11", 1, 1000
        );
        invoice.totalPrice();
    });
    it("Створення екземпляру класу", () => {
        expect(invoice).toBeTruthy();
    });
    it("Створення екземпляру класу з від'ємною кількістю товарів", () => {
        expect(() => new Invoice(
            "0016154", "25.01.2024", "Microsoft",
            "Ковальчук О. В.", "Windows 11", -1, 1000
        )).toThrow(new Error ("ware_number < 0!"));
    });
    it("Створення екземпляру класу з від'ємною ціною", () => {
        expect(() => new Invoice(
            "0016154", "25.01.2024", "Microsoft",
            "Ковальчук О. В.", "Windows 11", 1, -1000
        )).toThrow(new Error ("unit_price < 0!"));
    });
    it("Виведення властивостей об'єкта класу", () => {
        let result: string = `
Номер документа: 0016154
Дата складання: 25.01.2024
Продавець: Microsoft
Покупець: Ковальчук О. В.
Опис товарів: Windows 11
Кількість товарів: 1
Ціна за одиницю: 1000
Сума до сплати: 1000`;
        expect(invoice.show()).toEqual(result);
    });
    it("Розрахунок сумарної вартості", () => {
        expect(invoice.total_price).toEqual(1000);
    });
});