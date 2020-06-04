var txtTarefa = document.querySelector('#txtTarefa');
var btnAdd = document.querySelector('#btnAdd');
var tableToDo = document.querySelector('#tableToDo tbody');

console.log(tableToDo);


btnAdd.onclick = function (){
    //innerHTML substitui conteúdo atual pelo conteudo entre ''  
    //Variável criada para checar a input apenas uma vez
    var tarefa = txtTarefa.value.trim();
    //trim remove os espaços em branco
    if (tarefa === '') {
        alert('Você deve informar uma tarefa');    
    }else{
        //variaveis para linha com 3 colunas
        var linha = document.createElement('tr');
        var celulaNumero = document.createElement('th');
        var celulaTarefa = document.createElement('td');
        var celulaRemover = document.createElement('td');

        //celulaTtarefa recebe o input armazenado em tarefa
        celulaTarefa.appendChild(document.createTextNode(tarefa));
        //Coloca as variáveis dentro da linha conforme a ordem
        linha.appendChild(celulaNumero);
        linha.appendChild(celulaTarefa);
        linha.appendChild(celulaRemover);
        //coloca a linha na tabela
        tableToDo.appendChild(linha);

        console.log(linha);
    }
    
}