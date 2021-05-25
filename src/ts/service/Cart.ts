import Buyable from "../domain/Buyable";

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    this._items.push(item);
  }

  get items(): Buyable[] {
    return [...this._items];
  }
  getPrice() {
    return this._items.reduce((price, item) => price + item.price, 0);
  }
  getPriceDiscount(discount: number) {
    let fullSum: number = this.getPrice();
    fullSum = fullSum - (fullSum / 100) * discount;
    return fullSum;
  }
  dellItem(id: number): void {
    this._items.forEach((item, index) => {
      if (item.id === id) {
        this._items.splice(index, 1);
      } else {
        throw new Error("id не найден");
      }
    });
  }
}
