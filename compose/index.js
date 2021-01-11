const compose = (...fns) => [...fns].reverse().reduce((acc, cur) => cur(acc));

function range(from = 0, to = 0, skip = 1) {
    const result = [];
    for (let i = from; i < to; i += skip) {
        result.push(i);
    }
    return result;
}

const odd = (num) => num % 2 !== 0;
const pow2 = (num) => Math.pow(num, 2);
const sum = (cum, num) => cum + num;	

// 对于filterReducer，你可以赋予它任何filter能力和reducer能力，然后就得到了一个具有filter能力的reducer
const filterReducer = predicate => reducer => (acc, cur) => predicate(cur) ? reducer(acc, cur) : acc;

// 高阶reducer则更简单，依次传入cur的转化器和转化后cur与acc的连接器，就得到了一个普通的reducer
const hocReducer = transformer => connecter => (acc, cur) => connecter(acc, transformer(cur));

const reducer = compose(filterReducer(odd), hocReducer(pow2), sum);

const data = range(0, 100).reduce(reducer);
console.log(data);   // 166650
