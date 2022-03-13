'use strict';

// JSON
// JavaScript Object Notation
// - simplest data interchange format
// - lightweight text-based structure
// - easy to read
// - key-value pairs
// - used for serialization and transmission of data between the network the network connection
// - independent programming language and platform

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    // symbol: Symbol('id'), //js만의 symbol은 json에 포함되지 않음
    jump: function () {     //method 또한 json에 포함되지 않음
        console.log(`${this.name} can jump!`);
    },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name', 'color', 'size']);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'insoo' : value;
});
console.log(json);

// 2. JSON to Object
// parse(json)
json = JSON.stringify(rabbit);
console.log(json);
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
// obj.jump();

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());

/*JSON에 대해 조금더 공부를 하고 싶으시면:
MDN ➡️ https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON
JavaScript.info ➡️ https://javascript.info/json
JavaScript.info 한국어 ➡️ https://ko.javascript.info/json

유용한 사이트:
JSON Diff checker: http://www.jsondiff.com/
JSON Beautifier/editor: https://jsonbeautifier.org/
JSON Parser: https://jsonparser.org/
JSON Validator: https://tools.learningcontainer.com/json-validator/
*/