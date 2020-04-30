const AlunoModel = require('./models/Aluno');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/diferente', {useNewUrlParser:true, useUnifiedTopology:true});
const dbConnection = mongoose.connection;

dbConnection.once('open', () => {
    console.log('Connection made with success \n\n');
    
});

dbConnection.on('error', (error) => {
    console.log('Something went wrong:'+error); 
});

var test = async () =>{
    if(await AlunoModel.findOne({name:'Atualizei'})){
        console.log('tem algo');
    }
}

test();