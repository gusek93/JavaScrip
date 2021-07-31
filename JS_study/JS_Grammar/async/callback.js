// JavaScrip is synchronous. -> JS는 동기식 언어이다. 
// Excute the code block by orger after hoisting. -> hoisting 이 된 이후 작성한 코드 순서대로 동기식으로 실행된다. 
// hoisting: var, function declaration
// hoisting 부연 설명 -> var 변수나 function 선언이 제일 위로 올라가는것

console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3');


// Synchronous callback
function printImmediately(print) {
    print();
}
printImmediately(() => console.log('hello'));


// Asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}

printWithDelay(() => console.log('async acllback'), 2000);


// Callback Hell example
console.log(`--------------- HellGate Callback`);

class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'dayong' && password === 'gream') ||
                (id === 'coder' && apssword === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }
    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'dayong') {
                onSuccess({name: 'dayong', role: 'admin'});
            } else {
                onError(new Error('no access'));
            }
        },1000);
    }
}


const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id, 
    password,
    user => {
        userStorage.getRoles(  
        userWithRole => {
            alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
            );
        },
        error => {
        console.log(error);
        }
        );
    },
    error => {
        consol.log(error)
    }

);

//콜백 안에 콜백을 계속 쓰게 되는 문제점!!
// 가독성이 떨어진다. 
// 비지니스 로직을 한눈에 이해하기 어렵다