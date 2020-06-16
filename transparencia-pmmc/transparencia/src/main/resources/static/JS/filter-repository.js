function filterByNome(list) {
    let filteredList = new Object()
    let j=0
    for(let i in list) {
        if(list[i].nome.toLowerCase().includes(nomeField.value.toLowerCase())) {
        	filteredList[j] = list[i]
            j++
        }
    }
    return filteredList
}

function filterByCargo(list) {
    let filteredList = new Object()
    let j=0
    for(let i in list) {
        if(list[i].cargo.toLowerCase().includes(cargoField.value.toLowerCase())) {
        	filteredList[j] = list[i]
            j++
        }
    }
    return filteredList
}

function filterByRendimentos(list) {
	let filteredList = new Object()
	let minValue = salMinField.value
	let maxValue = salMaxField.value
	let j=0
	for(let i in list) {
		if(list[i].rendimentos >= minValue && list[i].rendimentos <= maxValue) {
			filteredList[j] = list[i]
			j++
		}
	}
	return filteredList
}