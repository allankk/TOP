
// WORKING WITH PROTOTYPE

    // Here’s the code that creates a pair of objects, then modifies them.
    // Which values are shown in the process?

// let animal = {
//     jumps: null
// }

// let rabbit = {
//     __proto__: animal,
//     jumps: true
// }

// alert(rabbit.jumps); // -- TRUE

// delete rabbit.jumps;

// alert(rabbit.jumps); // -- null

// delete animal.jumps;

// alert(rabbit.jumps); // -- undefinedE

//  SEARCHING ALGORITHM

    //  The task has two parts.
    //  Given the following objects:

let head = {
    glasses: 1
};

let table = {
    __proto__: head,
    pen: 3
};

let bed = {
    __proto__: table,
    sheet: 1,
    pillow: 2
};

let pockets = {
    __proto__: bed,
    money: 2000
};

// console.log(bed.glasses);

    // 1. Use __proto__ to assign prototypes in a way that any property lookup will follow the path: pockets → bed → table → head. For instance, pockets.pen should be 3 (found in table), and bed.glasses should be 1 (found in head).
    // 2. Answer the question: is it faster to get glasses as pockets.glasses or head.glasses? Benchmark if needed. --> no difference in modern engines.


// WHERE DOES IT WRITE

    // We have rabbit inheriting from animal.
    // If we call rabbit.eat(), which object receives the full property: animal or rabbit?
    // --> RABBIT, because this is an object before the dot.

let animal = {
    eat() {
        this.full = true;
    }
    };
    
    let rabbit = {
    __proto__: animal
    };
    
    rabbit.eat();

// WHY ARE BOTH HAMSTERS FULL

    // We have two hamsters: speedy and lazy inheriting from the general hamster object.
    // When we feed one of them, the other one is also full. Why? How can we fix it? --> FIXED

let hamster = {
    
    
    eat(food) {
        this.stomach.push(food);
    }
    };
    
    let speedy = {
    stomach: [],
    __proto__: hamster
    };
    
    let lazy = {
    stomach: [],
    __proto__: hamster
    };
    
    // This one found the food
    speedy.eat("apple");
    console.log( speedy.stomach ); // apple
    
    // This one also has it, why? fix please.
    console.log( lazy.stomach ); // apple
