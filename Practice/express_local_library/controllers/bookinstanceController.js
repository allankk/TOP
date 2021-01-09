var BookInstance = require('../models/bookinstance');

// Display list of all BookInstances
exports.bookinstance_list = function(req, res, next) {
    
    BookInstance.find()
        .populate('book')
        .exec(function (err, list_bookinstances) {
            if (err) { return next(err); }
            // successful, so render
            res.render('bookinstance_list', { title: 'Book Instance List', bookinstance_list: list_bookinstances});
        });
};

// Display detail page for a specific bookinstance
exports.bookinstance_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Bookinstance detail: ' + req.params.id);
};

// Display BookInstance Create form on GET
exports.bookinstance_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: BookInstance create GET');
};

// Handle Bookinstance create on POST
exports.bookinstance_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Bookinstance create POST');
};

// Display Bookinstance delete form on GET
exports.bookinstance_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Bookinstance create GET');
};

// Display BookInstance delete on POST
exports.bookinstance_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Bookinstance delete POST');
};

// Display Bookinstance update form on GET
exports.bookinstance_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Bookinstance update GET');
};

// Display BookInstance update on POST
exports.bookinstance_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Bookinstance update POST');
};