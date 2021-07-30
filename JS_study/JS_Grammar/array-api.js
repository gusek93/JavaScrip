// 배열 사용할때 같이 사용 하면 좋은 함수 예제10개

// 1. make a string out of an array
{
    const fruits = ['apple','banana','orange'];
    const result = fruits.join(',');
    console.log(result);

}

// 2. make an array out a string
{
    const fruits = '사과,키위,바나나,체리';
    const result = fruits.split(',', 2);
    console.log(result); 
}

// 3. make this array look like this: [5, 4, 3, 2, 1,]
{
    const array = [1 ,2, 3, 4, 5];
    const result = array.reverse(); 
    console.log(result);
}

// 4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    const result = array.splice(0, 2);
    console.log(result);
    console.log(array);

}

// class 생성
class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

// 5. find a student with the score 90
{
    const result = students.find((student) => student.score === 90);
    console.log(result);
}

// 6. make an array of enrolled students
{
    //const result = students.forEach((student) => student.enrolled === true); -> undefined
    //const result = students.find((student) => student.enrolled === true); -> only first index 

    const result = students.filter((student) => student.enrolled);
    console.log(result);
}

// 7. make an array containging only the students scores
// result should be : [45, 80, 90, 66, 88]
{
    // map() 결과값을 바꿀 때도 사용 할수 있음
    // ex) => studen.score 값이 
    const result = students.map((studnet) => studnet.score);
    console.log(result);
}

// 8. check fi there is a student with the score lower than 50
{
    const result = students.some((student) => student.score < 50);
    console.log(result);

    const result2 = students.every((student) => student.score < 50);
    console.log(result2);
}

// 9.cmopute students' average score
// reduce = 시작점부터 어떤 값을 누적할때 사용한다. 

{
    // return 값이 prev로 들어가게 된다. ( return 을 써주지 않으면 두번쨰 부터 undifind로 출력 된다.  )
    const result = students.reduce((prev, curr) => {
        console.log('-----------------');
        console.log(prev);
        console.log(curr);
        return prev + curr.score;
    }, 0);
    console.log(result / students.length);
}

// 10. make a string contatingin all the scores
// result should be: '45, 80, 90, 66 ,88'
{
    const result = students.map((student) => student.score).join();
    console.log(result);
}