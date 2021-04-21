// var nome = "Gerson Severo";
// var idade = 30;
// var idade2 = 10;
// var frase = "Japão é o melhor time do mundo";
// alert(nome + " tem " + idade + " anos ");
// alert(idade + idade2)

// console.log(nome)
// console.log(idade*idade2/idade)
// console.log(frase.replace("Japão","Brasil"));


// var lista = ["maça","uva","laranja"];
// lista.push("pera");
// console.log(lista);
// // lista.pop();
// console.log(lista.length);
// console.log(lista.toString());
// console.log(lista.join(" | "));


// var frutas = [{nome:"maça", cor:"vermelha"},{nome:"uva", cor:"roxa"}]
// console.log(frutas[1].cor);

// var idade = prompt("Qual sua idade");



// if (idade >= 18){
//     alert("maior de idade");
// }else{
//     alert("menor de idade")
// }

// var count = 0;

// while (count < 7){
//     console.log(count);
//     count++;
// };



// var count;


// for(count=0; count <=5; count ++){
//     alert(count);
// }



// var d = new Date();
// alert(d.getDay()+1);

// Alert (“Digital Innovation One:” + formacoes)


// function soma(n1, n2){
//     return n1 + n2;



// var idade = prompt("Qual a sua idade?")

// function validaIdade(idade){
//     var validar;
//     if (idade >=18){
//     var validar = true;
//     }else{

//         validar = false;
//     }
//     return validar
// }

// console.log(validaIdade(idade));







// function setReplace(frase, nome, novo_nome){
//     return frase.replace(nome, novo_nome)
// }
// alert(soma(5, 10));
// alert(setReplace("Vai Japão", "Japão", "Brasil"))


function botao(){
    // alert("Obrigado por clicar")
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    // console.log(document.getElementById("agradecimento"))
}

function redirecionar(){
    // window.open("https://www.google.com/");
    window.location.href = "https://www.google.com/"
}

function trocar(elemento) {
    // document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    // alert("trocar texto")
    elemento.innerHTML = "Obrigado por passar o mouse"
}


function voltar(elemento) {
    // document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui"
}

function load(){
    alert("Pagina carregada")
}

function funcaoChange(elemento){
    console.log(elemento.value)
}