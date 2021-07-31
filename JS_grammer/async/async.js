// async & await
// clear style of using promise :)


// 1. async
// async 를 쓰게 되면 코드 블록 안의 명령이 promise 를 쓴것과 동일하게 되어 작업이 끝날때까지 기다리지 않아도 된다. 
async function fetchUser() {
    return 'dayong';
}

const user = fetchUser();
user.then(console.log);
console.log(user);


// 2. await
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(1000);
    return '사과';
}

async function getBanana() {
    await delay(1000);
    return '바나나';
}

async function pickFruits() {
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;

    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);


// 3. useful Promise APIs
// 함수의 실행 시간을 각각 기다리지 않고 동시에 실행해주는 all
function pickFruits() {
    return Promise.all([getApple(), getBanana()]).then(fruits =>
        fruits.join('+')
    );
}

pickFruits().then(console.log);