// Promise is a JavaScript object for asynchronous oeration.
// 콜백 함수 대신 비동기적으로 사용 할수 있는 함수 
// State: pending -> fulfuilled or rejected
// Producer vs Consummer

// 1. Producer
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read fiels)
    console.log(`doing something ...`);
    setTimeout(() => {
        //resolve('dayong');
        reject(new Error('no network'));
    }, 2000);
});

// 2. Consumers: then, catch, finally
promise
.then(value => {
    console.log(value);
})
.catch(error => {
    console.log(error);
})
.finally(() => {
    // promise가 끝날때 최종적으로 출력 할것이 있을때 사용(성공 로그 등..)
    console.log('작업이 완료 됐습니다.');
});

// 3. Promise chinitng
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num -1), 1000);
        });
    })
    .then(num => console.log(num));


// 4. Error Handling
const getHen = () => 
    new Promise ((resolve, reject) => {
        setTimeout(() => resolve('닭'), 1000);
    });
const getEgg = hen => 
    new Promise ((resolve, reject) => {
        setTimeout(() => resolve(`${hen} => 계란`), 1000);
    });
const cook = egg => 
    new Promise ((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 계란`), 1000);
    });

    getHen()
    .then(hen => getEgg(hen))
    // .catch(consol.log); -> 중간에 에러를 넣는것도 가능
    .then(egg => cook(egg))
    .then(meal => console.log(meal));