

function discount(price) {
    const first100Price = 100;
    const second100Price = 90;
    const third100Price = 80;
    if (price <= 100) {
        const total = price * first100Price;
        return total;
    }
    else if (price <= 200) {
        const first100 = 100 * first100Price;
        const rest = price - 100;
        const second100 = rest * second100Price;
        const total = first100 + second100;
        return total;
    }
    else if (price > 200) {
        const first100 = 100 * first100Price;
        const second100 = 100 * second100Price;
        const rest = price - 200;
        const third100 = rest * third100Price;
        const total = first100 + second100 + third100;
        return total;
    }
    else {
        const first100 = 100 * first100Price;
        const second100 = 100 * second100Price;
        const remainingQuantity = price - 200;
        const third100 = remainingQuantity * third100Price;
        const total = first100 + second100 + third100;
        return total;
    }
}
const totalPrice = discount(1000);
console.log(totalPrice);