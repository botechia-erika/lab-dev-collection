// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {

    return num1 + num2
}


console.log(soma(1, 2))
    // EXERCÍCIO 0B
function imprimeMensagem() {
    // implemente sua lógica aqui
    const mensagem = prompt('Digite uma mensagem!')
    console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
    // implemente sua lógica aqui
    // area retangulo= altura x largura ** ingressadas por user**
    let perguntaUsuario = prompt('altura do triangulo')
    const altura = Number(perguntaUsuario)
    perguntaUsuario = prompt('largura do triangulo')
    const largura = Number(perguntaUsuario)
    const area = () => console.log(altura * largura)
    return area(altura, largura)
}
calculaAreaRetangulo()
    // EXERCÍCIO 02
function imprimeIdade() {
    // implemente sua lógica aqui
    const date = new Date()
    const monthToday = Number(Date().pop(6, 7).toString())
        //Escreva uma função que pede ao usuário o ano atual e seu ano de nascimento e imprima no console sua idade.
    let anoAtual = prompt('mes de aniversario')
    const mesNiver = console.log(Number(anoAtual))
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
    // implemente sua lógica aqui

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
    // implemente sua lógica aqui
    // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
    // implemente sua lógica aqui

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
    // implemente sua lógica aqui

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
    // implemente sua lógica aqui

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
    // implemente sua lógica aqui

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
    // implemente sua lógica aqui

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
    // implemente sua lógica aqui

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
    // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
    // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
    // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
    // implemente sua lógica aqui

}

// EXERCÍCIO 15
function isAdminin() {
    // implemente sua lógica aqui
}