import * as React from 'react';

interface ConcatStr {
    (str1: string, str2: string): string
}

interface Rest {
    (str: string, ...rest: any[]): void
}

// 重载，但不知道为啥不会报错。。
function testOverload(x: number): number;
function testOverload(x: Array<number>): number[];

function testOverload(x): any {
    if (typeof x === 'number') {
        return [12];
    }
    if (typeof x === 'object') {
        return x;
    }
}
console.log(testOverload(1));

class Func extends React.Component {

    test: ConcatStr = function(str) {
        return str;
    }
    // 这两种一样
    test2: (str: string) => string = function(str) {
        return str;
    }

    // v?:number = 100 会报错，即可选与默认值不能同时设置
    testDefaultValue(v:number = 100): void {
        console.log(v)
    }

    testRest: Rest = (str, ...rest) => {
        console.log(str, rest);
    }

    testThis() {
        return () => {
            console.log(this);
            return this;
        }
    }

    componentDidMount() {
        this.testDefaultValue();
        // this.testDefaultValue(200, 1); // 报错，参数数量不可太多
        this.testRest('123456', 1, 2, 3);
        console.log(this.testThis()() === this); // true
    }

    render() {
        return <div>Func</div>
    }
}

export default Func;
