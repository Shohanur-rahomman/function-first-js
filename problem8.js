function findAveragePhonePrice(phones) {

    if (phones.length === 0) { return 0 }//if array empty

    let totalPrice = 0;
    for (let i = 0; i < phones.length; i++) {
        totalPrice += phones[i].price;
    }
    const avgPrice = totalPrice / phones.length;
    return avgPrice;

}

const phones = [
    { model: "PhoneA", brand: "Iphone", price: 6 },
    { model: "PhoneB", brand: "Samsung", price: 6 },
    { model: "PhoneC", brand: "Oppo", price: 6 },
    { model: "PhoneD", brand: "Nokia", price: 6 },
    { model: "PhoneE", brand: "Iphone", price: 6 },
    { model: "PhoneF", brand: "HTC", price: 6 },
];

const result = findAveragePhonePrice(phones);
console.log(result);