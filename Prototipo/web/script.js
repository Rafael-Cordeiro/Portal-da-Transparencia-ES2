/*
 * Esse é o script principal. Encarregdo de carregar as variáveis
 * utilizadas no site, sendo as que utilizam os dados fornecidos pelo
 * servidor, quanto as que manipulam a DOM.
 * Também é o responsável por analisar as condições de filtro e selecionar
 * os filtros necessários a partir dos parâmetros passados pelo usuário 
 */



// Chaves de filtro
var doFiltrarNome = false;
var doFiltrarCargo = false;
var doFiltrarIdade = false;
var doFiltrarSalario = false;

// Captura de marcações
var nome = document.querySelector('input#nome'); // recebe nome
var cargo = document.querySelector('input#cargo'); // recebe cargo
var btnIdade = document.querySelector('button#btnIdade'); // recebe botão aplicar filtro (idade)
var btnSalario = document.querySelector('button#btnSalario'); // recebe botão aplicar filtro (salário)
var fxfield = document.getElementsByClassName('fxnum'); // recebe campos das faixas numéricas
var btn = document.querySelector('button#btn'); // recebe botão filtrar
var table = document.querySelector('table#tabela'); // recebe tabela que vai receber daodos
var refresh = document.querySelector('button#refresh'); // requisita em tempo de execução

// Objetos de dados
var resultado = new Object;
var listaFiltrada = new Object;

// AJAX - recebe os dados do servidor
$.get({
    url: "Controller",
    beforeSend: function() {
        $("#tabela").html('<img src="load.gif"/>');
    }
}, function(data) {
    resultado = data;
    printTabela(table,resultado);
    //generateIndex(resultado);
});

// Solicita os dados ao servidor novamente e printa na tela
refresh.addEventListener('click', function() {
    $.get("Controller", function(data) {
        clearFields();
        resultado = data;
        printTabela(table,resultado);
        //generateIndex(resultado);
    });
});

// DEPURAÇÃO
btn.addEventListener('click', function(){
    nome.value = '';
    cargo.value = '';
    document.querySelector('input#idade_min').value = '';
    document.querySelector('input#idade_max').value = '';
    document.querySelector('input#sal_min').value = '';
    document.querySelector('input#sal_max').value = '';
    doFiltrarNome = false;
    doFiltrarCargo = false;
    doFiltrarIdade = false;
    doFiltrarSalario = false;
    filtrar();
});

// Evento aplicar filtro de idade
btnIdade.addEventListener('click', function() {
    let inputMin = document.querySelector('input#idade_min');
    let inputMax = document.querySelector('input#idade_max');
    if(inputMin.value.length !== 0 && inputMax.value.length !== 0) {
        if(parseFloat(inputMin.value) <= parseFloat(inputMax.value)) {
            doFiltrarIdade = true;
            filtrar();
        } else {
            alert('A idade mínima está maior que a idade máxima.\nCorrija isso para poder filtrar');
            inputMin.value = '';
            inputMax.value = '';
        }
    } else {
        alert('insira números nos campos de idade');
    }
});

// Evento aplicar filtro de salario
btnSalario.addEventListener('click', function() {
    let inputMin = document.querySelector('input#sal_min');
    let inputMax = document.querySelector('input#sal_max');
    if(inputMin.value.length !== 0 && inputMax.value.length !== 0) {
        if(parseFloat(inputMin.value) <= parseFloat(inputMax.value)) {
            doFiltrarSalario = true;
            filtrar();
        } else {
            alert('O salário mínimo está maior que o salário máximo.\nCorrija isso para poder filtrar');
            inputMin.value = '';
            inputMax.value = '';
        }
    } else {
        alert('insira números nos campos de salário');
    }
});

// Retirar filtros de faixa numérica
for(let i=0;i<fxfield.length;i++) {
    if(i<2){
        fxfield[i].addEventListener('keyup', function() {
            let idmin = document.querySelector('input#idade_min');
            let idmax = document.querySelector('input#idade_max');
            if(idmin.value.length === 0 && idmax.value.length === 0) {
                doFiltrarIdade = false;
                filtrar();
            }
        });
    } else {
        fxfield[i].addEventListener('keyup', function() {
            let salmin = document.querySelector('input#sal_min');
            let salmax = document.querySelector('input#sal_max');
            if(salmin.value.length === 0 && salmin.value.length === 0) {
                doFiltrarSalario = false;
                filtrar();
            }
        });
    }
}

//Evento aplicar filtro de nome
nome.addEventListener('keyup', function() {
    if(nome.value.length !== 0) {
        doFiltrarNome = true;
        filtrar();
    } else {
        doFiltrarNome = false;
        filtrar();
    }
});

//Evento aplicar filtro de cargo
cargo.addEventListener('keyup', function() {
    if(cargo.value.length !== 0) {
        doFiltrarCargo = true;
        filtrar();
    } else {
        doFiltrarCargo = false;
        filtrar();
    }
});

// Função filtrar principal
function filtrar() {
    limpaTabela(table);
    listaFiltrada = resultado;
    if(doFiltrarNome) {
        listaFiltrada = filtroNome(listaFiltrada);
    }
    if(doFiltrarCargo) {
        listaFiltrada = filtroCargo(listaFiltrada);
    }
    if(doFiltrarIdade) {
        listaFiltrada = filtroIdade(listaFiltrada);
    }
    if(doFiltrarSalario) {
        listaFiltrada = filtroSalario(listaFiltrada);
    }
    printTabela(table,listaFiltrada);
}