var netflix = {
    nome:"netflix",
    mensalidade: 30.00,
}

var hboMAX = {
    nome:"hboMAX",
    mensalidade:31.00,
}

var op = "N";

//retorna os atributos de um objeto de acordo com a opçao
switch (op) {
    case "N" :
        console.log(netflix)
        break;

    case "H":
        console.log(hboMAX)
        break; 

    default:
        console.log("opcao invalida")
        break;
}
