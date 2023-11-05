
class circle { 
    constructor(radius,color) {
        this.radius = radius;
        this.color = color;
    }
    set RadiusCircle(radius) {
        this.radius = radius;
    }
    get RadiusCircle() {
        return this.radius;
    }
    set circleColor(color) {
        this.color = color;
    }
    get circleColor() {
        return this.color;
    }
    get toString() {
        return `"Circle[radius =${this.radius},color=${this.color}]"`;
    }
    get areaCircle() {
        return Math.PI * this.radius * this.radius;
    }
    get circumference() {
        return 2 * Math.PI * this.radius;
    }
};
let circle1 = new circle(1.0, "Red");
console.log(circle1.areaCircle);