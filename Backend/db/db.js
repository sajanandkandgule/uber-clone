const mongoose = require('mongoose');


 function connectDB() {
     const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/uber_clone';
     mongoose.connect(dbURI, {
         useNewUrlParser: true,
         useUnifiedTopology: true,
     }).then(() => {
         console.log('Connected to MongoDB');
     }).catch((err) => {
         console.error('Error connecting to MongoDB:', err);
     });
}

module.exports = connectDB;
