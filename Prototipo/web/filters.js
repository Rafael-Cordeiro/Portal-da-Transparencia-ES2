/*
 * Esse script possui a implementação dos métodos de filtros utilizados no
 * protótipo, Além de possuir a função responsável por exibir a lista
 */


$.getScript("script.js"); //Faz a inclusão do script principal neste escopo


/*
 * Função exibe a lista na página
 */
function printTabela(table,lista) {
    limpaTabela(table);
    if(Object.keys(lista).length === 0) {
        table.innerHTML = '<h2>Não foram encontrados resultados</h2>';
    } else {
        //Abaixo criação de cabeçalho
        let thead = document.createElement('thead');
        let hrow = document.createElement('tr');
        let hdata = new Array();
        for(let i=0;i<Object.keys(lista[0]).length;i++) hdata[i] = document.createElement('th');
        hdata[0].innerText = Object.keys(lista[0])[2];
        hdata[1].innerText = Object.keys(lista[0])[0];
        hdata[2].innerText = Object.keys(lista[0])[3];
        hdata[3].innerText = Object.keys(lista[0])[1];
        for(let i=0;i<Object.keys(lista[0]).length;i++) hrow.appendChild(hdata[i]);
        thead.appendChild(hrow);
        table.appendChild(thead);
        
        //Abaixo criação do corpo da tabela
        let tbody = document.createElement('tbody');
        for(let i in lista) {
            let row = document.createElement('tr');
            row.setAttribute('class','datarow');
            if(i%2!==0) row.setAttribute('style','background-color: rgb(230, 230, 230);');
            let data = new Array();
            for(let i=0;i<Object.keys(lista[0]).length;i++) {
                data[i] = document.createElement('td');
            }
            data[0].innerText = `${lista[i].nome}`;
            row.appendChild(data[0]);
            data[1].innerText = `${lista[i].idade}`;
            row.appendChild(data[1]);
            data[2].innerText = `${lista[i].cargo}`;
            row.appendChild(data[2]);
            data[3].innerText = `${lista[i].salario.toFixed(2)}`;
            row.appendChild(data[3]);
            tbody.appendChild(row);
        }
        table.appendChild(tbody);
    }
}

function limpaTabela(table) {
    table.innerHTML = '';
}

/*
 * Filtra a exibição da lista a partir do campos
 * 'Idade mínima' e 'Idade máxima'
 */
function filtroIdade(lista) {
    let min = document.querySelector('input#idade_min').value;
    let max = document.querySelector('input#idade_max').value;
    let listaFiltrada = new Object();
    let j=0;
    for(let i in lista) {
        if(lista[i].idade >= min && lista[i].idade <= max) {
            listaFiltrada[j] = lista[i];
            j++;
        }
    }
    return listaFiltrada;
}

/*
 * Filtra a exibição da lista a partir do campos
 * 'Salário mínimo' e 'Salário máximo'
 */
function filtroSalario(lista) {
    let min = document.querySelector('input#sal_min').value;
    let max = document.querySelector('input#sal_max').value;
    let listaFiltrada = new Object();
    let j=0;
    for(let i in lista) {
        if(lista[i].salario >= min && lista[i].salario <= max) {
            listaFiltrada[j] = lista[i];
            j++;
        }
    }
    return listaFiltrada;
}

/*
 * Filtra a exibição da lista a partir do campo 'Nome'
 */
function filtroNome(lista) {
    let nome = document.querySelector('input#nome').value;
    let listaFiltrada = new Object();
    let j=0;
    for(let i in lista) {
        if(lista[i].nome.toLowerCase().includes(nome.toLowerCase())) {
            listaFiltrada[j] = lista[i];
            j++;
        }
    }
    return listaFiltrada;
}

/*
 * Filtra a exibição da lista a partir do campo 'Cargos'
 */
function filtroCargo(lista) {
    let cargo = document.querySelector('input#cargo').value;
    let listaFiltrada = new Object();
    let j=0;
    for(let i in lista) {
        if(lista[i].cargo.toLowerCase().includes(cargo.toLowerCase())) {
            listaFiltrada[j] = lista[i];
            j++;
        }
    }
    return listaFiltrada;
}

/*
 * Limpa os campos de inserção de dados de filtro inseridos pelo usuário
 * Utilizada quando o usuário chama a função "limpar filtro" ou "Refresh"
 */
function clearFields() {
    document.querySelector('input#nome').value = '';
    document.querySelector('input#cargo').value = '';
    document.querySelector('input#idade_min').value = '';
    document.querySelector('input#idade_max').value = '';
    document.querySelector('input#sal_min').value = '';
    document.querySelector('input#sal_max').value = '';
}


//Evento muda o fundo do site ao passar o mouse em cima do copyright
function backchangeon() {
    document.body.style = "background: url(perfil.jpg)";
}
function backchangeoff() {
    document.body.style = "background: rgb(57, 136, 255);";
}