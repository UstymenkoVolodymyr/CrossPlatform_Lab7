import { Receipt } from "./Receipt";
describe("Тестування класу Receipt", () => {
    let receipt: Receipt;
    beforeEach(() => {
        receipt = new Receipt(
            "0016154", "25.01.2024", "Microsoft",
            "Ковальчук О. В.", "Придбання Windows", 1, 1000
        );
        receipt.totalPrice()
    });
    it("Створення екземпляру класу", () => {
        expect(receipt).toBeTruthy();
    });
    it("Створення екземпляру класу з від'ємною кількістю товарів", () => {
        expect(() => new Receipt(
            "0016154", "25.01.2024", "Microsoft",
            "Придбання Windows", "Ковальчук О. В.", -1, 1000
        )).toThrow(new Error ("ware_number < 0!"));
    });
    it("Створення екземпляру класу з від'ємною ціною", () => {
        expect(() => new Receipt(
            "0016154", "25.01.2024", "Microsoft",
            "Придбання Windows", "Ковальчук О. В.", 1, -1000
        )).toThrow(new Error ("unit_price < 0!"));
    });
    it("Виведення властивостей об'єкта класу", () => {
        let result: string = `
Номер документа: 0016154
Дата складання: 25.01.2024
Продавець: Microsoft
Покупець: Ковальчук О. В.
Призначення платежу: Придбання Windows
Сума платежу: 1000`;
        expect(receipt.show()).toEqual(result);
    });
    it("Розрахунок сумарної вартості", () => {
        expect(receipt.total_price).toEqual(1000);
    });
});