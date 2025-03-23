const btn_adicionar = document.querySelector("#adicionar") //botao adcionar
const btn_remover = document.querySelector("#remover") //botao remover
const caixa2 = document.querySelector("#caixa2") //seção 2 onde os cursos estao listados
const cursos = ["HTML","CSS","JavaScript","PHP","React","MySQL","ReactNative"] //cursos listados no inicio
const btn_selecionado = document.querySelector("#selecionado")
let selecionado = ''

//testando a criacao de uma funcao para criar as divs com os cursos e botoes de radio e adciona eventos de clique
function criarDivs(nome='') {
    const cursoDigitado = document.querySelector('#inomecurso').value
    const NovoElemento = document.createElement("div")
    NovoElemento.setAttribute("class","div_elementos")
    
    if (nome!=='') {
        NovoElemento.innerHTML=nome
    }else{
        NovoElemento.innerHTML=cursoDigitado
        cursos.push(cursoDigitado) // adiciona o novo curso no array cursos
    }
    
    // cria o botao de radio
    const botaoRadio = document.createElement("input")
    botaoRadio.setAttribute("type","radio")
    botaoRadio.setAttribute("name","radio")
    botaoRadio.setAttribute("class","btnRadio")
   
    botaoRadio.addEventListener('change',()=>{
        //aponta para o texto que esta dentro do pai do botao
        selecionado = botaoRadio.parentNode.textContent
       
        // Remove a classe 'selecionado' de todas as divs
        const divs = document.querySelectorAll('.div_elementos');
        divs.forEach((div)=>{
             div.classList.remove('selecionado')
        });
        // Adiciona a classe 'selecionado' na div do botão de rádio clicado
        //o parentNode aponta para o pai do botão
        botaoRadio.parentNode.classList.add('selecionado');
   })
    
    //limpa o input com o nome do curso
    const nomecurso = document.querySelector("#inomecurso")
    nomecurso.value=''

    //insere a nova div e o botao de radio    
    caixa2.appendChild(NovoElemento)
    NovoElemento.appendChild(botaoRadio)    
}

//inserir as divs via javascript na caixa2 e cria os elementos de radio dentro da div pai
cursos.map((elemento)=>{
    criarDivs(elemento)
})

//Funções do botao adicionar que adiciona a nova div pegando o nome digitado
btn_adicionar.addEventListener('click',()=>{
    let cursoDigitado = document.querySelector("#inomecurso").value
    if (cursoDigitado!=='') {
        criarDivs()

    } else {
        alert('Curso Vazio!!!')
    }
   
})

//remover elemento com o botao remover
btn_remover.addEventListener('click',()=>{
    const selecionado = document.querySelector(".selecionado")
    caixa2.removeChild(selecionado)
   
})

  btn_selecionado.addEventListener('click',()=>{
   alert(`Você selecionou: ${selecionado}`)
 })





