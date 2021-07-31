console.log(`--------------- HellGate Callback`);

class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, rejeckt) =>{
            setTimeout(() => {
                if (
                    (id === 'dayong' && password === 'dream') ||
                    (id === 'coder' && password === 'academy')
                ) {
                    resolve(id);
                } else {
                    rejeckt(new Error('not found'));
                }
            }, 2000);
        });      
    }

    getRoles(user) {
        return new Promise((resolve, rejeckt) => {
            setTimeout(() => {
                if (user === 'dayong') {
                    resolve({name: 'dayong', role: 'admin'});
                } else {
                    rejeckt(new Error('no access'));
                }
            },1000);
        })   
    }
}


const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage
.loginUser(id, password)
.then(userStorage.getRoles)
.then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
.catch(console.log);

