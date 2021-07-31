// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple','banana']);
console.log(json);

const rebbit = {
    name: 'tory',
    color: 'whitse',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${naem} can jump!`);
    },

};

json = JSON.stringify(rebbit);
console.log(json);

json = JSON.stringify(rebbit, ['name','color','size']);
console.log(json);

json = JSON.stringify(rebbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'dayong' : value;
});
console.log(json);


console.log(`-------2. JSON to Obeject Start ----------`);
// 2. JSON to Obeject
// parse(json)
json = JSON.stringify(rebbit);
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);

console.log(rebbit.birthDate.getDate());
console.log(obj.birthDate.getDate());

