const Author = require('../models/author');

// Display all authors
exports.author_list = (req, res) => {
  res.send('NOT IMPLEMENTED: Author List');
};

// Display specific author
exports.author_detail = (req, res) => {
  res.send('NOT IMPLEMENTED: Author detail' + req.params.id);
};

// Handle author create on POST
exports.author_create_post = (req, res) => {
  res.send('NOT IMPLEMENTED: Author create POST');
};

// Display author delete form on GET
exports.author_delete_get = (req, res) => {
  res.send('NOT IMPLEMENTED: Author delete GET');
};

// Handle author delete on POST
exports.author_delete_post = (req, res) => {
  res.send('NOT IMPLEMENTED: Author delete POST');
};

// Display author update form on GET
exports.author_update_get = (req, res) => {
  res.send('NOT IMPLEMENTED: Author update GET');
};

// Handle author update on POST
exports.author_update_post = (req, res) => {
  res.send('NOT IMPLEMENTED: Author update POST');
};
