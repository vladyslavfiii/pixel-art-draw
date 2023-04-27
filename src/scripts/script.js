window.onload = () => {
	tableCreator();
}

function tableCreator() {

	let table = document.createElement('table');
	table.classList.add("tableToDraw");
	document.getElementById('pixelArtDrawWorkspace').appendChild(table);

	let tableSize = 32;
	for (let i = 0; i < tableSize; i++) {
		let tr = document.createElement('tr');
		tr.id = "trId" + i;
		table.appendChild(tr);

		for (let k = 0; k < tableSize; k++) {
			let th = document.createElement('th');
			th.id = "thId" + k;
			th.addEventListener('click', this.onclick)
			tr.appendChild(th);
		}
	}
}



function draw(cell) {
	console.log(cell);
	this.onclick = function(event) {
        console.log(this); 
      };
}