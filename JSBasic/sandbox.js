function User(name,email) {
    this.name = name;
    this.email = email;
}

User.prototype.login = function() {
    console.log(`${this.name} is logged in`);
};

User.prototype.logout = function() {
    console.log(`${this.name} is logged out`);
};

const userOne = new User('Alex','alex@gmail.com');
const userTwo = new User('Black','black@gmail.com');


// console.log(userOne);
userOne.login();
userTwo.login();

userOne.logout();
userTwo.logout();


// new does
//  1. Create a blank object = userOne = {name:'',email:''}
//  2. Allocate the space in memory
//  3. Intialize by calling the constructor function