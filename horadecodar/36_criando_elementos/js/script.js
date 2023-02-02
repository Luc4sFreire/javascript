// inserir no body
var novoPgf = document.createElement('p');
var texto = document.createTextNode('Este é o conteúdo introduzido pelo JS!');
novoPgf.appendChild(texto);
var body = document.querySelector("body");
body.appendChild(novoPgf);

// inserir em um conteiner

var container = document.querySelector('#container');
var novoPgf2 = document.createElement('p');
var text = document.createTextNode('Texto inserido dentro do container!');
novoPgf.appendChild(text);
container.appendChild(novoPgf2);