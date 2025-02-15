const phones = [
    { name: 'iphone', price: 1000,quantity: 1 },
    { name: 'samsung', price: 700,quantity: 4 },
    { name: 'poco', price: 900,quantity: 2 },
    { name: 'oppo', price: 800,quantity: 5 },
];

function maxPrice(phones){
    let max = phones[0];
    for(const phone of phones){
        if(phone.price > max.price){
            max = phone;
        }
    }
    return max;
}

const result = maxPrice(phones);
console.log(result);

// price of phone