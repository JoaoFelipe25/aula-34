// variavel do tipo objeto
var pessoa = {
    nome:"Joao",
    idade:23,
    estudante: false
}

// switch/case que escolhe entre duas possibilidades de opçoes
switch (pessoa.estudante){
    case true :
        console.log("Estudante")
        break;

    case false:
        console.log("graduado")
        break;
    
    default:
        console.log("nao registrado")
        break;
    
}