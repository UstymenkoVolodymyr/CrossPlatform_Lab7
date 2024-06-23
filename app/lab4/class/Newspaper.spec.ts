import { Newspaper } from "./Newspaper";
describe("Тестування класу Newspaper", () => {
    let newspaper: Newspaper;
    beforeEach(() => {
        newspaper = new Newspaper("Газета", 1000, 10, 10);
    });
    it("Створення екземпляру класу", () => {
        expect(newspaper).toBeTruthy();
    });
    it("Створення екземпляру класу з від'ємним тиражем", () => {
        expect(() => new Newspaper("Газета", -1000, 10, 10)).toThrow(new Error ("circulation < 0!"));
    });
    it("Створення екземпляру класу з від'ємною кількістю сторінок", () => {
        expect(() => new Newspaper("Газета", 1000, -10, 10)).toThrow(new Error ("page_number < 0!"));
    });
    it("Створення екземпляру класу з від'ємною ціною", () => {
        expect(() => new Newspaper("Газета", 1000, 10, -10)).toThrow(new Error ("page_price < 0!"));
    });
    it("Виведення властивостей об'єкта класу", () => {
        let result: string = "Назва: Газета Кількість сторінок: 10 Ціна сторінки: 10 Тираж: 1000";
        expect(newspaper.show()).toEqual(result);
    });
    it("Розрахунок вартості тиражу", () => {
        expect(newspaper.CirculationCost()).toEqual(10 * 10 * 1000);
    });
});