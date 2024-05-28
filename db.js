const mongoose = require('mongoose');

const dbURI = 'your_mongodb_connection_string_here';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => console.log('MongoDB Connected'))
   .catch(err => console.log(err));

module.exports = mongoose;
