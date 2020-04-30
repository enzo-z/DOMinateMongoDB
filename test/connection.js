const mongoose = require('mongoose');

//ConnectMongoose

 /** Connect before tests */
 before( function(done){ 
    mongoose.connect('mongodb://127.0.0.1:27017/diferente', {useNewUrlParser:true, useUnifiedTopology:true});
    const dbConnection = mongoose.connection;
    dbConnection.once('open', () => {
        console.log('Connection made with success \n\n');
        done();
        
    });

    dbConnection.on('error', (error) => {
        console.log('Something went wrong:'+error); 
    });
    
});


