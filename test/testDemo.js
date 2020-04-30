const assert = require('assert');
const AlunoModel = require('../models/Aluno');
describe('Aluno', () => {

    it('#saveAluno in alunos', async () => {
        let student = new AlunoModel({name:'Async without done', age: 5000, reg:'Await'});
        await student.save();
    });

});