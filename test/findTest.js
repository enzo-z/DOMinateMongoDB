const assert = require('assert');
const AlunoModel = require('../models/Aluno');
var resultado;
var sickStudent;
describe('Collection alunos', function (){

    before( function(done){
        sickStudent = new AlunoModel({name:'César', age:20, reg:'Vc esqueceu seu remedinho'});
        sickStudent.save(done);
    });
    
    it('#increment operator', function(done){
        AlunoModel.updateMany({$inc: {age: 3}}).then(()=> {done()})
    })

    it('#findAluno in alunos', function(done){
        AlunoModel.find({name:'Atualizei'}).then( function (result){
            console.log(result)
            assert(result[0].name === 'Atualizei');
            console.log('RESULTADO:' +result);
            
            done();
        }).catch( (err)=>{
            done(err);
        });
    });
        
    
});

