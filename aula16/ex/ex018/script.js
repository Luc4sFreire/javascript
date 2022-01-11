let num = document.querySelector('#fnum')
let lista = document.querySelector('#flista')
let res =  document.querySelector('#res')
let valores = []

//validando os valores
function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

//adicionando valores...
function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        //introduzindo valores no array
        valores.push(Number(num.value))
        //criando option para visualização dentro do select
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        alert('[ERRO] Valor inválido ou já encontrado na lista!')
    }
    //limpando campo
    num.value = ''
    num.focus()
}

function finalizar(){
    //verificando se o vetor esta vazio antes de finalizar
    if(valores.length == 0){
        alert('[ERRO] Adicione valores antes de finalizar!')
    }else{
        //declarando váriaveis para diferentes situações
        let tot = valores.length
        //relação de maior e menor número
        let maior = valores[0] //no inicio o maior e o menor número são, respectivamente, o primeiro número adicionado no vetor
        let menor = valores[0]
        let soma = 0
        let media = 0

        //verificando...
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }
        }
        //calculando a média...
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
    }
}