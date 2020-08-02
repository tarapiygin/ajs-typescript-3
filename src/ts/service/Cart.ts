import Buyable from '../domain/Buyable';

type Item = {
    quantity: number,
    buyable: Buyable,
}

export default class Cart {

    private _items: Item[] = [];

    add(buyable: Buyable): void {
        const item = this._items.find((elem) => {
            return elem.buyable.id === buyable.id;
        });
        if (item !== undefined) item.quantity += 1;
        else {
            this._items.push({
                quantity: 1,
                buyable: buyable,
            });
        }
    }

    delete(id: number): void {
        const i = this._items.findIndex(item => {
            return item.buyable.id === id;
        });
        if (i !== -1) {
            const item = this._items[i];
            if (item.quantity > 1) item.quantity -= 1;
            else this._items.splice(i, 1);
        };
    }

    get items(): Item[] {
        return [...this._items];
    }

    calculateTotalPrice(): number {
        let totalPrice: number = 0;
        this._items.forEach((item) => {
            let price: number = item.buyable.price;
            if (item.quantity !== undefined) {
                price *= item.quantity;
            }
            totalPrice += price;
        })
        return totalPrice;
    }

    calculateTotalDiscountedPrice(discount: number): number {
        const totalDiscountedPrice: number = this.calculateTotalPrice() - discount;
        return totalDiscountedPrice;
    }
}