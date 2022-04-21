function calcOrDouble(number, basis = 2) {
    // basis = basis || 2; ES5

    console.log(number*basis);
}
calcOrDouble(3,5);
calcOrDouble(5);

class Rectangle {
    constructor(height, width = 20) {
        this.height = height;
        this.width = width;
    }
    calcArea() {
        return this.height * this.width;
    }
}

const square = new Rectangle(10);

console.log(square.calcArea());

let video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [video, blogs, 'vk', 'facebook'];