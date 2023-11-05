class uberPrice{
    constructor(kilometer,fare){
        this.fare = fare;
        this.kilometer = kilometer;
    }
    get bill() {
        return this.kilometer * this.fare;
    }
};
let passanger1 = new uberPrice(10,20);
let passanger2 = new uberPrice(30, 10);

console.log(passanger2.bill);