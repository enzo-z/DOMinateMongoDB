const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AlunoSchema = new Schema( {
    name: String,   
    age: Number,
    reg: String
 });

const AlunoModel = mongoose.model('alunos', AlunoSchema);

module.exports = AlunoModel;