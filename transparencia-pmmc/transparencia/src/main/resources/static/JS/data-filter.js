// Realização do filtro e impressão na tabela
function filter() {
	cleanTable()
	filteredList = result
	if(nomeFlag) {
		filteredList = filterByNome(filteredList)
	}
	if(cargoFlag) {
		filteredList = filterByCargo(filteredList)
	}
	if(rendimentosFlag) {
		filteredList = filterByRendimentos(filteredList)
	}
	putInTable(filteredList)
}

// <--- (AEL) Adicionando os Event Listeners nas áreas de inserção --->

// Nome
nomeField.addEventListener('keyup', function(){
	if(nomeField.value.length != 0) {
		nomeFlag = true;
		filter()
	} else {
		nomeFlag = false
		filter()
	}
})

// Cargo
cargoField.addEventListener('keyup', function() {
	if(cargoField.value.length != 0) {
		cargoFlag = true
		filter()
	} else {
		cargoFlag = false
		filter()
	}
})

// Rendimentos (caso nulo)
function _eventForRendimentos() {
	if(salMinField.value == 0 && salMaxField.value == 0) {
		rendimentosFlag = false
		filter()
	}
}
salMinField.addEventListener('keyup', _eventForRendimentos)
salMaxField.addEventListener('keyup', _eventForRendimentos)

// Rendimentos (caso valor)
salFilterApplyBtn.addEventListener('click', function() {
	if(salMinField.value != 0 && salMaxField.value != 0) {
		if(salMinField.value <= salMaxField.value) {
			rendimentosFlag = true
			filter()
		} else alert('ERRO: O salário mínimo está maior que o salário máximo!\n\nAltere a ordem para poder filtrar')
	} else alert('ERRO: Um ou mais campos está vazio!')
})

clearFilterBtn.addEventListener('click',function() {
	clearInsertionFields()
	setFlags(false)
	filter()
	
})

// <--- (AEL) fim --->

// Funções auxiliares
function clearInsertionFields() {
	nomeField.value = ''
	cargoField.value = ''
	salMinField.value = ''
	salMaxField.value = ''
}

function setFlags(logic) {
	nomeFlag = logic
	cargoFlag = logic
	rendimentosFlag = logic
}





