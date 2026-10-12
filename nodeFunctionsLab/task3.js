function checkOrder(available, ordered) {
    if (ordered === 0) {
        return "Your order is empty";
    }
    if (available < ordered) {
        return "Your order is too large, we don’t have enough goods.";
    }
    return "Your order is accepted";
}

console.log(checkOrder(10, 5));  // Your order is accepted
console.log(checkOrder(10, 15)); // Your order is too large, we don’t have enough goods.
console.log(checkOrder(10, 0));  // Your order is empty
