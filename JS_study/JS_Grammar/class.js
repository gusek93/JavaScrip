// 1. class 
 class Person {
     constructor(name, age) {
         this.name = name;
         this.age = age;
     }
 

 //methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
 }

 const dayong = new Person('dayong', 29);
 console.log(dayong.name);
 console.log(dayong.age);
 dayong.speak();


 // 2. getter/setter
 // 사용자가 값을 잘못 입력 하더라도 개발자가 지정한 값으로 출력할때 쓰인다

 class User {
     constructor(firstName, lastName, age) {
         this.firstName = firstName;
         this.lastName = lastName;
         // 값을 바로 할당 하는 것이 아니라 get age(), set age()를 호출한다.
         this.age = age;
     }

     get age() {
        return this._age;
     }

     set age(value) {
        this._age  = value < 0 ? 0 : value;
     }
 }

     const user1 = new User('steve', 'job', -1);
     console.log(user1.age);


     // Public & Private 기능으로 최신 문법
     // # 사용 할 경우 class 내부에서만 값을 변경 가능
     class Experiment {
         publicField = 2;
         #privateField = 0;
     }
     
     const experiment = new Experiment();
     console.log(experiment.publicField);
    
     // 출력시 undifind
     console.log(experiment.privateField);
     