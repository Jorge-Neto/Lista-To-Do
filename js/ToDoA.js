var txtTarefa = document.querySelector('#txtTarefa');
var btnAdd = document.querySelector('#btnAdd');
var tableToDo = document.querySelector('#tableToDo tbody');
// Declarando array com length conforme conteúdo
var lista = [];
var codigo = 1;

btnAdd.onclick = function () {
    //innerHTML substitui conteúdo atual pelo conteudo entre ''
    tableToDo.innerHTML = '';    //Variável criada para checar a input apenas uma vez
    var tarefa = txtTarefa.value.trim();
    //trim remove os espaços em branco
    if (tarefa === '') {
        alert('Você deve informar uma tarefa');
    } else {
        //Variável que pega a data detalhadamente
        var data = new Date();
        //Que é adicionada em outra variávei que irá formatar a anterior
        var dataDetalhada = `Data ${data.getDate()}/${data.getMonth(+1)}/${data.getFullYear()} Hora ${data.getHours()}:${data.getMinutes()}`;

        //Empurra o objeto dentro do vetor Lista
        lista.push({
            codigo,
            tarefa,
            dataDetalhada
        });
        codigo++;
        
        //chamar função
        renderizarLista();

    
    }
}

function renderizarLista() {
    for (item of lista) {
        //variaveis para linha
        var linha = document.createElement('tr');
        //E 3 colunas
        var celulaNumero = document.createElement('th');
        var celulaTarefa = document.createElement('td');
        var celulaData = document.createElement('td');
        var celulaRemover = document.createElement('td');
        var botaoRemover = document.createElement('button');

        //Adiciona texto e estilo ao botão
        botaoRemover.appendChild(document.createTextNode('Remover'));
        //setAttribute adiciona a classe dentro da tag do botao
        botaoRemover.setAttribute('class', 'btn btn-light');
        //Crase INTERPOLA, que é melhor que concatenar ${Sconteudo}
        botaoRemover.setAttribute('onclick', `removerLista(${item.codigo})`);

        //celulaNumero recebe o codigo dentro de objeto
        celulaNumero.appendChild(document.createTextNode(item.codigo));
        //celulaTtarefa recebe o input armazenado em tarefa
        celulaTarefa.appendChild(document.createTextNode(item.tarefa));
        //celulaData recebe a data
        celulaData.appendChild(document.createTextNode(item.dataDetalhada));
        //celulaRemover o botão de remover
        celulaRemover.appendChild(botaoRemover);

        //Coloca as variáveis dentro da linha conforme a ordem
        linha.appendChild(celulaNumero);
        linha.appendChild(celulaTarefa);
        linha.appendChild(celulaData);
        linha.appendChild(celulaRemover);
        //coloca a linha na tabela
        tableToDo.appendChild(linha);
    }
}

function removerLista(id) {
    let remove = id - 1;
    tableToDo.innerHTML = '';
    //alert(`Código: ${id}`);
    lista.splice(remove, 1);
    renderizarLista();
    codigo--;
}