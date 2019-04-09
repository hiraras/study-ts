import * as React from 'react';

class Animal {
    private name: string;
    // protected声明的成员，可以在类定义的内部与派生类(子类)定义的内部调用，其他地方不行
    protected age: number;
    constructor(theName: string, age?: number) { 
        this.name = theName;
        this.age = age;
    }
}

class Rhino extends Animal {
    constructor() { super("Rhino", 16); }
    getAge() {
        console.log(this.age);
    }
}

class Employee {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

let animal = new Animal("Goat");
// console.log(animal.name); // 报错,私有属性只能在该类定义的内部使用
let rhino = new Rhino();
// 这里的age是protected的，在子类内部能够通过this.age访问到，外部则不能直接访问
// console.log(rhino.age); // 报错
rhino.getAge(); // 16
let employee = new Employee("Bob");
animal = rhino; // Rhino和Animal共享了Animal里的私有成员name
// animal = employee; // 报错,即便两个类结构一样，但name属性为private的所以两个实例类型不一样不能赋值

// 抽象类
// 抽象类不允许用来实例化，内部抽象的方法(用abstract修饰的方法)必须在派生类(子类)中实现
abstract class AbstractClass {
    constructor(protected name: string) {

    }
    abstract printMeeting(): void; // 必须在派生类中实现
}

class TestAbstract extends AbstractClass {

    constructor(name: string) {
        // 抽象类的派生类的construct函数内必须调用super()
        super(name);
    }

    getName() {
        console.log(this.name);
    }

    printMeeting() {
        console.log('printMeeting');
    }

    ttt() {
        console.log('ttt');
    }
}

// new AbstractClass(); // 无法实例化抽象类
let ta = new TestAbstract('TestAbstract');
ta.getName();
ta.ttt();

class Class extends React.Component {

    // 只可在该类的定义范围内访问
    private privateVar = 'pppp';
    public publicVar = 'ssss';

    componentDidMount() {
        console.log(this.privateVar);
    }

    render() {
        return <div>Class</div>;
    }
}

let cl: Class;
console.log(cl, '-----'); // undefined
// cl = new Employee(''); // 报错

console.log(new Class().publicVar);

export default Class;