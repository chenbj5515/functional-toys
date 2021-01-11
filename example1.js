// input: ['john-reese', 'harold-finch', 'sameen-shaw']
// output: [{name: 'John Reese'}, {name: 'Harold Finch'}, {name: 'Sameen Shaw'}]

const input = ['john-reese', 'harold-finch', 'sameen-shaw'];

const {compose, curry, map, join, split} = R;

const capitalize = x => x[0].toUpperCase() + x.slice(1);

const handleName = compose(join(' '), map(capitalize), split('-'));

const convert2Obj = map(x => ({name: handleName(x)}));

console.log(convert2Obj(input));


