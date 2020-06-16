// Objetos e lista de armazenamento de dados

var result = new Object
var filteredList = new Object
var listOfLabels = new Array

// Flags de filtro
var nomeFlag = false
var cargoFlag = false
var rendimentosFlag = false;


//Elementos da página

var nomeField = document.querySelector('input#nome')
var cargoField = document.querySelector('input#cargo')
var salMinField = document.querySelector('input#sal-min')
var salMaxField = document.querySelector('input#sal-max')
var salFilterApplyBtn = document.querySelector('button#sal-filter-apply')
var clearFilterBtn = document.querySelector('button#clean-filters')
var table = document.querySelector('table#dataField')

// Request ajax
$.ajax({
	method: 'GET',
	url: '/funcionarioAJAX'
})
.done(function(response) {
	result = response
	for(let i in Object.keys(result[0])) listOfLabels[i] = Object.keys(result[0])[i]
	putInTable(result)
})
.fail(function(){
	alert('Ocorreu uma falha no carregamento.')
})