'use strict';

// Object-oriendted programming
// class: template
// object: instance of class
// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-bases inheritance

// 1. Class declarations
class Person {
    // constructor
    constructor(name, age) {
        // fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const insoo = new Person('insu', 24);
console.log(insoo.name);
console.log(insoo.age);
insoo.speak();

// 2. Getter and Setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        // if (value < 0) {
        //     throw Error('age can not be negative');
        // }
        this._age = value < 0 ? 0 : value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(val) {
        this._lastName = val;
    }
}

const user1 = new User("insoo", "LEE", -1);
console.log(user1.lastName);
console.log(user1.age);

// 3. Fields (public, private)
// Too soon!
// 
class Experiment {
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField); // -> undefinded

// 4. Static properties and methods
// Too soon!
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

// 5. Inheritance
// a way for one class to extend another class.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw() {
        console.log(`drawing ${this.color} color!`);
    }
    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape { }
class Triangle extends Shape {
    draw() {
        super.draw();
        console.log('XX');
    }
    getArea() {
        return (this.width * this.height) / 2;
    }
    toString() {
        return `Triaangle: color: ${this.color}`
    }
}

const rectangle = new Rectangle(20, 20, 'red');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'blue');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
console.log(triangle.toString());

// Tips:https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects
// js built-in objects mdn