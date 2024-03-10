const mongoose = require('mongoose');
const DB = 'mongodb+srv://shivanshtiwari:programmer@mycluster.yfkrgmz.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(DB).then(()=>{
     console.log('Database connected successfully.');
 }).catch((err) => console.log("Can't connect: " + err));

const db = mongoose.connection;


db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open',  function(){
     console.log('Connected to Database : MongoDB');
});


module.exports = db;

