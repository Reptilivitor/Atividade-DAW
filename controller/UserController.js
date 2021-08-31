async function calculadora(req, res) {
    res.render("calculadora.ejs", {});
}

async function operacao(req, res) {

    var num1 = req.body.num1;
    var num2 = req.body.num2;
    var operador = req.body.operador;
    var resultado = 0;

    if (operador == "Adição") {
        num1 = parseInt(num1);
        num2 = parseInt(num2);
        resultado = num1 + num2;
    } else if (operador == "Subtração") {
        num1 = parseInt(num1);
        num2 = parseInt(num2);
        resultado = num1 - num2;
    } else if (operador == "Multiplicação") {
        num1 = parseInt(num1);
        num2 = parseInt(num2);
        resultado = num1 * num2;
    } else if (operador == "Divisão") {
        num1 = parseInt(num1);
        num2 = parseInt(num2);
        resultado = num1 / num2;
    }

    res.render("res.ejs", { resultado: resultado });
}

module.exports = { calculadora, operacao }