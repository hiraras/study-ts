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

class Interface extends React.Component {
    constructor(public name) {
        super();
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
        // 使用断言可以绕过检查,但是可能有些属性还是需要检查的，可以使用[propName: string]: any
        // 用这种方式除了其他定义的必须的字段，任何字段都可以传
        this.getPersonMsg({ firstName: 'lucy', age: 22, lastName: 'tan', hairColor: 'brown' });
        this.testPoint();
        this.testReadonlyArr();
        return <div>Interface</div>
    }
}

export default Interface;
