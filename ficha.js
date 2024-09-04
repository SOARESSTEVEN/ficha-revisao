//1
var name = "Stiven";
let idade = 18;
const estudante = true //ou false;
let frutas = ['morango','laranja','limao'];
const pessoa = {
    nome:"stiven",
    idade:18,
    cidade: "mindelo"
};

//2
let   nome_completo = "Stiven SOARES";
let frase = "ola ,meu nome e" + "Stiven";
const mensagem = `ola ,meu nome e ${nome_completo}`;
let letrasMinusculas = nome_completo.toLowerCase();
const comtemSilva = nome_completo.includes("silva");


//3
let array = [1, 2, 3, 4, 5];
array.push(6);
array.shift();
let quadradoArray = array.map(num => num * num);
let arrayFiltre = array.filter(num => num > 2)

//4
const elemento = document.getElementById("titulo").innerHTML = "Bem-vindo ao JavaScript!"
document.getElementById("cor").addEventListener('click' ,function (){
    document.body.style.backgroundColor = "blue"
});
const novoParagrafo = document.createElement("p");
novoParagrafo.innerText = "este é um novo parágrafo!";
document.body.appendChild(novoParagrafo);

//5
localStorage.setItem('username', 'Stiven');

const username = localStorage.getItem('username');
console.log(username)
 
localStorage.removeItem(username);
localStorage.clear();

//6
const somaPromise = new Promise((resolve, reject) =>{
    const soma = a + b;
    if (soma < 10){
        resolve(`${soma}, que e maior 10`)
    }
    else reject(`${soma}, que e menor 10`)
})
somaPromise.then(mensagem => {
    console.log(mensagem);
})
.catch(erro => {
    console.log(mensagem);
});

//7
async function downloadDados() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Dados baixados com sucesso!");
        }, 2000); 
    });
}

async function obterEDisplayDados() {
    const dados = await downloadDados();
    console.log(dados);
}
obterEDisplayDados();

//8
const pessoas = { nome: "João", idade: 25, cidade: "Lisboa" };
const pessoaJSON = JSON.stringify(pessoa);
console.log(pessoaJSON); 

const pessoaJSONString = '{"nome":"João","idade":25,"cidade":"Lisboa"}';
const pessoaObjeto = JSON.parse(pessoaJSONString);
console.log(pessoaObjeto); 
