// require mongoose
var mongoose = require('mongoose');

// Define a Schema
var Schema = mongoose.Schema;

var SomeModelSchema = new Schema({
    a_string: String,
    a_date: Date
})

var SomeModel = mongoose.model('SomeModel', SomeModelSchema);


// example
var breakfastSchema = new Schema({
    eggs: {
        type: Number,
        min: [6, 'too few eggs'],
        max: 12,
        required: [true, 'Why no eggs?']
    },
    drink: {
        type: String,
        enum: ['Coffee', 'Tea', 'Water']
    }
})

// Create an instance of model SomeModel
var awesome_instance = new SomeModel({ name: 'awesome' });

// Save the new model instance, passing a callback
awesome_instance.save(function (err) {
    if (err) return handleError(err);
    // saved
})

// QUERY
// find all athletes that play tennis
var query = Athlete.find({ 'sport': 'Tennis' });

// selecting the name and age fields
query.select('name age');

// limit results to 5 items
query.limit(5);

// sort by age
query.sort({ age: -1 });

// execute the query at a later time
query.exec(function (err, athletes) {
    if (err) return handleError(err);
    // athletes contains an ordered list of 5 athletes who play tennis    
}) 

// other way of querying
Athlete.
    find().
    where('sport').equals('Tennis').
    where('age').gt(17).lt(50). //Additional where query
    limit(5).
    sort({ age: -1 }).
    select('name age').
    exec(callback) // where callback is the name of our callback function

// WORKING WITH RELATED DOCUMENTS - POPULATION
// create references from one document instance to another using the ObjectId schema field.
// use the populate() method in a query to replace the id with actual data

// this defines authors and stories. Each author can have multiple stories, which we represent
// as an array of ObjectId. Each story can have a single author. The "ref" tells the schema
// which model can be assigned to this field
var mongoose = require('mongoose')
    , Schema = mongoose.Schema

var authorSchema = Schema({
    name    : String,
    stories : [{ type: Schema.Types.ObjectId, ref: 'Story'}]
});

var storySchema = Schema({
    author : { type: Schema.Types.ObjectId, ref: 'Author'},
    title  : String
})

var Story = mongoose.model('Story', storySchema);
var Author = mongoose.model('Author', authorSchema);

// saving references to the related document by assigning the _id value

var bob = new Author({ name: 'Bob Smith' });
bob.save(function(err) {
    if (err) return handleError(err);

    var story = new Story({
        title: "Bob goes sledding",
        author: bob._id
    });

    story.save(function(err) {
        if (err) return handleError(err);
    })
})

// get the author information in the story results
Story
    .findOne({ title: 'Bob goes sledding'})
    .populate('author') // this populates the author id with actual author information
    .exec(function (err, story) {
        if (err) return handleError(err);
        console.log('The author is %s', story.author.name);
    });

// add the story to the author
Story
    .find({ title: 'Bob goes sledding' })
    .exec(function (err, stories) {
        if (err) return handleError(err);
    })

