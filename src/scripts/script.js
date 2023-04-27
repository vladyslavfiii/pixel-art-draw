window.onload = () => {
	tableCreator(8);
}

function tableCreator(tableSize) {

	let table = document.createElement('table');
	table.classList.add("tableToDraw");
	table.id = "tableToDraw";

	document.getElementById('pixelArtDrawWorkspace').appendChild(table);

	for (let i = 0; i < tableSize; i++) {
		let tr = document.createElement('tr');
		tr.id = "trId" + i;
		table.appendChild(tr);

		for (let k = 0; k < tableSize; k++) {
			let th = document.createElement('th');
			th.id = "thId" + k;
			th.addEventListener('click', function (event) {
  				draw(this);
  			})
			tr.appendChild(th);
		}
	}
}

function draw(cell) {

	cell.style.background = "red";
}

function resize(){

	let pixelArtDrawWorkspace = document.getElementById('pixelArtDrawWorkspace');
	let inputSize = document.getElementById('resizeInputField');

	if (Number(inputSize.value) >= 2 && Number(inputSize.value) <= 64) {
		pixelArtDrawWorkspace.removeChild(pixelArtDrawWorkspace.children[0]);
		tableCreator(inputSize.value);

		inputSize.classList.replace('resizeErrorInputField', 'resizeInputField');
	}
	else {
		inputSize.classList.replace('resizeInputField', 'resizeErrorInputField');
	}
}

function reset(){

	let pixelArtDrawWorkspace = document.getElementById('pixelArtDrawWorkspace');
	let inputSize = document.getElementById('resizeInputField');
	let tableSize = Number(document.getElementById('tableToDraw').childElementCount);

	inputSize.classList.replace('resizeErrorInputField', 'resizeInputField');
	
	pixelArtDrawWorkspace.removeChild(pixelArtDrawWorkspace.children[0]);
	tableCreator(tableSize);
}
