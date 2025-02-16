function calculator(laptopQuantity, mobileQuantity, tabletQuantity) {
    const laptopPrice = 10;
    const mobilePrice = 10;
    const tabletPrice = 10;
    const totalPrice = (laptopPrice * laptopQuantity) + (mobilePrice * mobileQuantity) + (tabletPrice * tabletQuantity);
    return totalPrice;
}

const laptopQuantity = 2;
const mobileQuantity = 2;
const tabletQuantity = 2;

const result = calculator(laptopQuantity, mobileQuantity, tabletQuantity);
console.log(result);