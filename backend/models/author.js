const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const authorSchema = new Schema({
  first_name: {type: String, required: true, max: 100},
  family_name: {type: String, required: true, max: 100},
  date_of_birth: {type: Date},
});

// Virtual for Author's full name
authorSchema.virtual('name').get(function() {
  return this.family_name + ',' + this.first_name;
});

// Virtual for author's URL
authorSchema.virtual('url').get(function() {
  return 'catalog/author/' + this._id;
});

// Export
module.exports = mongoose.model('Author', authorSchema);
