// 배열 문법 ...args 사용 하면 됌

// Rest prameter (ES6)
// 파라미터를 넣지 않아도 순차저으로 실행 됌
function printAll(...args) {
	for (let i = 0; i < args.length; i++) {
		console.log(args[i]);
	}
}

printAll('dream' , 'coding' , 'dayong');


// Array

// 1. 배열 생성

const arr1 = new Array();
const arr2 = [1,2];

// 2. Index Position
const fruits = ['사과', '바나나'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);

//맨 마지막 배열 값 가지고 오기
console.log(fruits[fruits.length -1]);


// 3. Looping
//fruits 배열 모든 배열 꺼내기 (방법은 총3개)
//공부를 할때는 항상 문서를 참조 하여 어떤 값을 받고 출력 하는지 확인 하는 습관을 들이기 
const fruits2 = ['사과', '바나나','딸기', '배'];
for(let value of fruits2) {
    console.log(value);
}

// forEach 문서를 보면 value: T, index: number, array: [] 3가지 값을 받아 올수 있다 .
fruits2.forEach((fruits2, index, array) => {
	console.log(fruits2, index, array);
});


// 4. 배열 복사, 삽입, 삭제
// 맨뒤 배열 값 더하기 push
fruits2.push('수박','메론');
console.log(fruits2);

// 맨뒤 배열 값 뺴기 pop
fruits2.pop();
fruits2.pop();
console.log(fruits2);

//앞에서 더하기
fruits2.unshift('참외','복숭아');
console.log(fruits2);

//앞에서 뺴기
fruits2.shift();
console.log(fruits2);

// note !! shift, unshift 는 pop,push 보다 느리다!!
// 기존의 배열 전체가 이동 하기 떄문

fruits2.push('레몬','귤','오렌지');
console.log(fruits2);
fruits2.splice(1,1);
console.log(fruits2);
//원하는 인덱스 값 삭제후 추가도 가능 하다. 
fruits2.splice(1,1, '감','망고');

//기존 배열에 새로운 배열 추가 가능
const fruits3 = ['파파야','야자'];
const newFruits = fruits2.concat(fruits3);
console.log(newFruits);


//5. 배열 검색, 값의 존재 여부
console.log(fruits2);
console.log(fruits2.indexOf('귤')); // 중복 되는 값중 맨 앞에 있는 값 출력
console.log(fruits2.lastindexOf('귤')); //중복 되는 값중 맨 뒤에 있는 값 출력
console.log(fruits2.indexOf('장미')); //없는 값 -1로 출력

console.log(fruits2.includes('딸기'));
console.log(fruits2.includes('나무'));


