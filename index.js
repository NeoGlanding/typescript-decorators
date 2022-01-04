"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 1. Basic Decorators
function Logger1(constructor) {
    console.log('Log');
    console.log(constructor);
}
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person = __decorate([
        Logger1
    ], Person);
    return Person;
}());
var Ihsan = new Person('Ihsan', 18);
// console.log(Ihsan)
// 2. Decorators in Function Builder
var Logger = function (params) {
    return function (constructor) {
        console.log(params);
        console.log(constructor);
    };
};
var Students = /** @class */ (function () {
    function Students(name, age) {
        this.name = name;
        this.age = age;
    }
    Students = __decorate([
        Logger("Logging")
    ], Students);
    return Students;
}());
var Andi = new Person('Andi', 18);
// console.log(Andi)
// Useful Decorators for templating
function WithTemplate(template, hookId) {
    return function (constructor) {
        var hookEl = document.getElementById(hookId);
        var p = new constructor('ihsan');
        if (hookEl) {
            hookEl.innerHTML = template;
            document.querySelector('h1').textContent = p.name;
        }
    };
}
var Elements = /** @class */ (function () {
    function Elements(name) {
        this.name = name;
    }
    Elements = __decorate([
        WithTemplate('<h1>KSJALA</h1>', 'app')
    ], Elements);
    return Elements;
}());
// Property Decorator
function PropDec(target /*Refer to Object */, prop /*Refer to Property*/) {
    console.log(target, prop);
}
// Method Decorator
function MethodDecorator(target, name, description) {
    console.log('Method Decorator');
    console.log(target);
    console.log(name);
    console.log(description);
}
// Accessor Decorator
function AccessorDecorator(target, name, description) {
    console.log('Accessor Decorator');
    console.log(target);
    console.log(name);
    console.log(description);
}
// Parameter Decorator
function ParamDec(target, name, position) {
    console.log('Parameter Decorator');
    console.log(target);
    console.log(name);
    console.log(position);
}
// class Product {
//     @PropDec
//     private _price: number = 2000;
//     constructor(protected readonly key: string, name: string) {}
//     @AccessorDecorator
//     set price(val: number) {
//         this._price = val;
//     }
//     get price() {
//         return this._price
//     }
//     @MethodDecorator
//     testMethod(@ParamDec param: string) {
//         console.log(param)
//     }
// }
// const AdidasNeon = new Product('32A', 'Adidas Neon')
