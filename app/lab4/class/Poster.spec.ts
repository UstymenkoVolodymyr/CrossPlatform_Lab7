import { Poster } from "./Poster";
describe("Тестування класу Poster", () => {
    let poster: Poster;
    beforeEach(() => {
        poster = new Poster("Постер", 1000, 5, 2, 10);
    });
    it("Створення екземпляру класу", () => {
        expect(poster).toBeTruthy();
    });
    it("Створення екземпляру класу з від'ємним тиражем", () => {
        expect(() => new Poster("Постер", -1000, 5, 2, 10)).toThrow(new Error ("circulation < 0!"));
    });
    it("Створення екземпляру класу з від'ємною шириною", () => {
        expect(() => new Poster("Постер", 1000, -5, 2, 10)).toThrow(new Error ("width < 0!"));
    });
    it("Створення екземпляру класу з від'ємною висотою", () => {
        expect(() => new Poster("Постер", 1000, 5, -2, 10)).toThrow(new Error ("height < 0!"));
    });
    it("Створення екземпляру класу з від'ємною ціною за квадратний сантиметр", () => {
        expect(() => new Poster("Постер", 1000, 5, 2, -10)).toThrow(new Error ("price_cm2 < 0!"));
    });
    it("Виведення властивостей об'єкта класу", () => {
        let result: string = "Назва: Постер Ширина: 5 Висота: 2 Ціна за кв. сантиметр: 10 Тираж: 1000";
        expect(poster.show()).toEqual(result);
    });
    it("Розрахунок вартості тиражу", () => {
        expect(poster.CirculationCost()).toEqual(5 * 2 * 10 * 1000);
    });
});