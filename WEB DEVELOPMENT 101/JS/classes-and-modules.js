// INITIATING A CLASS

// initiate constructors with #element to create a private property

class User {
    #name;
    constructor(name, age, gender) {
        this.#name = name;
        this.age = age;
        this.gender = gender;
    }

    sayHi() {
        alert(this.name);
    }

    set name(value) {
        if (value.length < 3) {
            console.log("name too short");
            return;
        }
    }
}

let user = new User("John", 22, "male");


// Usage
// function newUser() {
//     let user = new User("John");
// };


// window.addEventListener('keydown', function(e) {
//     console.log(e.key);
//     if (e.key == 'a') {
//         newUser();
//     }

// });
