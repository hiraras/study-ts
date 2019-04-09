import * as React from 'react';

interface Human {
    firstName: string;
    age: number;
}

class Basic extends React.Component {

    test = 'test';
    // public相当于建立了同名的成员变量
    constructor(public name) {
        super();
        this.name = name;
    }

    testFunc() {
        // 两个元素都是数字类型的数组
        const numList1: number[] = [1, 2, 3];
        const numList2: Array<number> = [1, 2, 3];
        // 元组 Tuple
        // 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同
        const tuple: [string, number] = ['a', 2];
        // 枚举
        // 从1开始编号
        enum Color { red = 1, green, blue };
        console.log(Color); // {1: "red", 2: "green", 3: "blue", red: 1, green: 2, blue: 3}
        const c: Color = Color.green;
        console.log(Color[2]); // green
        // 或者
        const c2: number = Color.green;
        // object,可以赋值为任意值，但是只能调用object上的方法，而不能随意调用任意方法，
        // 下面赋值为数字，但是却不能使用toFixed()方法，而可以使用toString()方法
        let prettySure: Object = 4;
        // prettySure.toFixed(); // not ok
        prettySure.toString(); // ok

        // 默认情况下null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量。

        // 类型断言
        // 通过类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”。 
        // 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。 
        // 它没有运行时的影响，只是在编译阶段起作用。 TypeScript会假设你，程序员，已经进行了必须的检查。
        const someStr: any = 'hello';
        // 写法1
        // const someStrLen: number = (<string>someStr).length;
        // 写法2，两种写法等价，但是在jsx语法里只支持as写法
        const someStrLen: number = (someStr as string).length;

        // 解构赋值+类型声明
        const o = {
            a: 1,
            b: 'abc'
        };
        const { a, b }: { a: number, b: string } = o;
    }

    // never类型必须存在无法到达的终点
    infiniteLoop(): never {
        let bool = true; // 报错，不能使用变量
        // let bool = false; // 报错，不能使用变量，且应该要一个无法到达的终点
        while (true) {
        }
    }

    // 可以返回undefined和null
    getTitle(title: string): void {
        console.log(title);
        // return 1; // 报错 
    }

    personMsg(person: Human) {
        console.log(person.firstName + person.age);
    }

    render() {
        this.getTitle('this is test');
        this.personMsg({ firstName: 'jack', age: 16 });
        this.testFunc();
        return <div>Basic</div>
    }
}
console.log(new Basic('lucy'));
export default Basic;
