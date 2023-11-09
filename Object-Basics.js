const car = {
    make : "bmw",
    model:'x5',
    year : '2019'
}

console.log(car);

let currentdate = new Date();
let currentyear = currentdate.getFullYear();
console.log(currentyear);
function age() {
    console.log('the car age is ', currentyear-car.year);
}
age()
