function putInTable(list) {
	cleanTable()
	if(list.length == 0) {
		table.tBodies[0].innerHTML = 'Não foram encontrados elementos'
	} else {
		generateTHead()
		for(let i in list) {
			let tRow = document.createElement('tr')
			let tData = new Array
			for(let j in Object.values(list[i])) tData[j] = document.createElement('td')
			for(let j in tData) {
				tData[j].innerText = Object.values(list[i])[j]
				tRow.appendChild(tData[j])
			}
			tData[tData.length] = document.createElement('td')
			tData[tData.length-1].innerHTML = '<a href="#");"><i class="material-icons">add</i></a>'
			tRow.appendChild(tData[tData.length-1])
			table.tBodies[0].appendChild(tRow)
		}
	}
}

function cleanTable() {
	table.tHead.innerHTML = ''
	table.tBodies[0].innerHTML = ''
}


function generateTHead() {
	table.tHead.appendChild(document.createElement('tr'))
	for(let i in listOfLabels) {
		let node = document.createElement("th")
		let textnode = document.createTextNode(listOfLabels[i])
		node.appendChild(textnode)
		table.tHead.appendChild(node) 
	}
	let node = document.createElement("th")
	node.appendChild(document.createTextNode('mais informações'))
	table.tHead.appendChild(node)
}
