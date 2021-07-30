// objeck 를 사용 하는 이유
// 변수 하나당 값을 지정 할 경우 파라미터를 넘길때 변수 갯수가 많아지면 관리가 힘들다 ( 현재 프로젝트에서 경험 )

// object = { key : value} 핵심

// 1. object 를 생성 하는 방법은 두가지
const obj1 = {};  // objeck literal
const obj2 = new Object(); // objeck constructor

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const dayong = { name : 'dayong', age: 4};
print(dayong);


// 2. Computed properties
// * property 란
// object(객체) 안에 있는 변수
console.log(dayong.name); //정확한 값을 가지고 올때
// key = string type 만 가능
console.log(dayong['name']); //어떤 값을 가지고 올지 모를때 사용

function printValue(odj, key) {
    console.log(odj[key]);
}

printValue(dayong, 'name');
printValue(dayong, 'age');


// 3. Property value shortand
const person1 = { name: 'bob', age: 2};
const person2 = { name: 'steve', age: 3};
const person3 = { name: 'dave', age: 4};

//클래스 방식 처럼 object 생성
const person4 = new Person('dayong', 29);

console.log(person4);


// 4. constructor function
// object 를 계속 만들어 줘야 하는 번거로움이 있기에 함수를 만들어서 값만 넘기기 
function Person(name, age) {

    //this = {}; 생략 되어 있음
    this.name = name;
    this.age = age;
    
    // return 
  
}


// 5. in operator (해당 operator 안에 키가 있는지 없는지 확인 하는것)
console.log('name' in dayong);
console.log('age' in dayong);
console.log('random' in dayong);


// 6. for ..in vs for..of
//for (key in obj)
// dayong 안의 모든 키들이 블록을 반복 하며 key 변수에 할당된다
for (key in dayong) {
    console.log(key);
}

// for (value of)
// array 안에 값을 loop 를 돌며 하나씩 출력
const array = [1, 2, 3, 4, 5];
for(value of array) {
    console.log(value);
}


// 7. cloning
// user 와 user2 가 바라보는 object가 같은걸 의미
const user = { name: 'dayong', age: '29'};
const uesr2 = user;

// user2의 값을 바꾸면 user 값도 같은 object 를 바라보기 떄문에 값이 바뀐다. 
const2.name = 'coder';




