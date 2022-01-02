// 1. Basic Decorators
function Logger1(constructor: Function) {
    console.log('Log');
    console.log(constructor)
}


@Logger1
class Person {
    constructor(public name: string, protected age: number) {}
}

const Ihsan = new Person('Ihsan', 18);
// console.log(Ihsan)

// 2. Decorators in Function Builder
const Logger = (params: string) => {
    return function(constructor: Function) {
        console.log(params);
        console.log(constructor)
    }
}


@Logger("Logging")
class Students {
    constructor(public name: string, protected age: number) {}
}

const Andi = new Person('Andi', 18);
// console.log(Andi)


// Useful Decorators for templating
function WithTemplate(template: string, hookId: string) {
    return function (constructor: any) {
        const hookEl = document.getElementById(hookId);
        let p = new constructor('ihsan');
        if (hookEl) {
            hookEl.innerHTML = template;
            document.querySelector('h1')!.textContent = p.name
        }
    }
}

@WithTemplate('<h1>KSJALA</h1>', 'app')
class Elements {
    constructor(public name: string) {}
}

// Property Decorator
function PropDec(target: any /*Refer to Object */, prop: any /*Refer to Property*/) {
    console.log(target,prop)
}

// Method Decorator
function MethodDecorator(target: any, name: any, description: PropertyDescriptor) {
    console.log('Method Decorator')
    console.log(target)
    console.log(name)
    console.log(description)
}

// Accessor Decorator
function AccessorDecorator(target: any, name: any, description: PropertyDescriptor) {
    console.log('Accessor Decorator')
    console.log(target)
    console.log(name)
    console.log(description)
}


// Parameter Decorator
function ParamDec(target: any, name: string | symbol, position: number) {
    console.log('Parameter Decorator');
    console.log(target)
    console.log(name)
    console.log(position)
}

class Product {
    @PropDec
    private _price: number = 2000;
    constructor(protected readonly key: string, name: string) {}

    @AccessorDecorator
    set price(val: number) {
        this._price = val;
    }
    
    get price() {
        return this._price
    }

    @MethodDecorator
    testMethod(@ParamDec param: string) {
        console.log(param)
    }
}

const AdidasNeon = new Product('32A', 'Adidas Neon')