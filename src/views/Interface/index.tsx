import * as React from 'react';

// 可以使用的只有接口里面的字段，想要某个字段不是必须的就加?
interface Human {
    firstName: string;
    age: number;
    lastName: string;
    height?: number;
    [propName: string]: any;
}

interface Point {
    readonly x: number;
    readonly y: number;
}

// 函数接口
interface GetFunc{
    (params: string): number[];
}

// 类接口,接口描述了类的公共部分,而没有描述私有部分
interface TestClass {
    descriptor: string;
    // number为返回值的类型,意思是该类的实例会有test这个方法，方法接收一个字符串类型的形参，返回值为number类型
    test(param: string): number;
}

// 对的示例-----
interface TestClass2 {
    // 因为构造函数在类的静态部分，所以不在检查范围内，所以导致检查不通过，可以将该类作为参数传到函数中，来让它进行检查
    new (a: string, b: string);
}

class Test {
    constructor(a: string, b: string) {

    }
}

function t(cls: TestClass2) {

}
t(Test);
// ------

// 错的示例------
/*
interface TestClass2 {
    new (a: string, b: string);
}

class Test implements TestClass2 {
    constructor(a: string, b: string) {

    }
}
*/
// -----

// 接口的继承
interface Shape {
    area: number;
}

interface Img {
    size: number
}

// 可以继承多个
interface Rect extends Shape, Img {
    color: string;
}

class Interface extends React.Component implements TestClass {
    descriptor = "";
    constructor(public name) {
        super();
    }

    test(str: string) {
        return 1;
    }

    getPersonMsg(person: Human): void {
        console.log(person.age, person.firstName);
    }

    testPoint(): void {
        const p1: Point = { x: 2, y: 22 };
        // p1.x = 2; // 会报错
    }

    testReadonlyArr(): void {
        const arr: ReadonlyArray<number> = [1,23,4];
        let a = [];
        // a = arr; // error, 不能赋值给一个已存在的数组,可以通过断言的方式赋值
        a = arr as number[];
        let b = arr; // ok
        console.log(a, b);
        let c = [];
    }

    getData(param) {
        return [];
    }

    testInterfaceExtends(rectParam: Rect) {
        
    }

    render() {
        const person = { firstName: 'tom' };
        let getData: GetFunc;
        getData = this.getData;
        interface StringArray {
            [i: number]: string;
        }
        
        let myArray: StringArray;
        myArray = ["Bob", "Fred"];
        
        let myStr: string = myArray[0];
        this.getPersonMsg({ age: 13, firstName: 'jack', lastName: 'jassia' }); // 字段数必须和接口一样
        this.getPersonMsg(person as Human);
        // 使用断言可以绕过检查,但是可能有些属性还是需要检查的
        // 可以使用[propName: string]: any,用这种方式除了其他定义的必须的字段，任何字段都可以传
        this.getPersonMsg({ firstName: 'lucy', age: 22, lastName: 'tan', hairColor: 'brown' });
        this.testPoint();
        this.testReadonlyArr();
        // 继承的接口需要满足它本身与它的父接口,继承多个的时候，多个类型都需要满足
        this.testInterfaceExtends({ color: '', area: 0, size: 2 });
        return <div>Interface</div>
    }
}

console.log(new Interface('ss'));

export default Interface;
