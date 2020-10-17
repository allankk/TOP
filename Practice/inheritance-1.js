

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function () {
        let isBookRead;
        (this.read == true) ? (isBookRead = 'is read') : (isBookRead = 'not read yet');

        return (`${this.title} by ${this.author}, ${this.pages} pages, ${isBookRead}`);
    }
}

let theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
// console.log(theHobbit.info());


// #################################
//     JavaScriptIsSexy.com example of prototypes
// #################################

function PrintStuff (myDocuments) {
    this.documents = myDocuments;
}

    // We add the print() method to PrintStuff prototype property so that other instances (objects) can inherit it:
PrintStuff.prototype.print = function() {
    console.log(this.documents);
}

    // Create a new object with the PrintStuff() constructor, thus allowing this new object to inherit PrintsStuff's properties and methods.

let newObj = new PrintStuff('I am a new Object and I can print.')


//  ###################################
//  EXAMPLE OF IHERITANCE
//  ###################################

function Plant() {
    this.country = "Mexico";
    this.isOrganic = true;
}

    // Add a method to the Plant prototype

Plant.prototype.showNameAndColor = function() {
    console.log("I am a " + this.name + " and my color is " + this.color);
}

Plant.prototype.amIOrganic = function() {
    if (this.isOrganic) {
        console.log("I am organic, Baby")
    }
}

    //  Create a new constructor and set its prototype to Plant's constructor, thus inheriting all of Plant.prototype methods and properties.

function Fruit(fruitName, fruitColor) {
    this.name = fruitName;
    this.color = fruitColor;
}

Fruit.prototype = new Plant();

    // Create a new object with the Fruit constructor

let aBanana = new Fruit("Banana", "Yellow");

console.log(aBanana.name);
console.log(aBanana.showNameAndColor());

// ##############################
//     ANOTHER EXAMPLE
// ##############################

function People () {
    this.superstar = "Michael Jackson";
    }
    // Define "athlete" property on the People prototype so that "athlete" is accessible by all objects that use the People () constructor.
People.prototype.athlete = "Tiger Woods";
    
var famousPerson = new People ();
famousPerson.superstar = "Steve Jobs";
    
    // The search for superstar will first look for the superstar property on the famousPerson object, and since we defined it there, that is the property that will be used. Because we have overwritten the famousPerson’s superstar property with one directly on the famousPerson object, the search will NOT proceed up the prototype chain. 
console.log (famousPerson.superstar); // Steve Jobs
    
    // Note that in ECMAScript 5 you can set a property to read only, and in that case you cannot overwrite it as we just did.
    
    // This will show the property from the famousPerson prototype (People.prototype), since the athlete property was not defined on the famousPerson object itself.
console.log (famousPerson.athlete); // Tiger Woods
    
    // In this example, the search proceeds up the prototype chain and find the toString method on Object.prototype, from which the Fruit object inherited—all objects ultimately inherits from Object.prototype as we have noted before.
console.log (famousPerson.toString()); // [object Object]






