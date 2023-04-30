window.onload = () => {
	tableCreator(8);
	sidebarCreator();
}

function tableCreator(tableSize) {
	let workspace = document.querySelector('.pixelArtDrawWorkspace')
	let table = document.createElement('table');

	table.classList.add("tableToDraw");
	table.id = "tableToDraw";

	workspace.appendChild(table);

	for (let i = 0; i < tableSize; i++) {
		let tr = document.createElement('tr');
		table.appendChild(tr);

		for (let k = 0; k < tableSize; k++) {
			let th = document.createElement('th');
			tr.appendChild(th);

			th.addEventListener('click', function (event) { draw(this);})
		}
	}
}

function sidebarCreator(){
	
	let sidebar = document.querySelector('.sidebarPalette')
	let table = document.createElement('table');

	table.classList.add("tableToPickColor");
	table.id = "tableToPickColor";

	sidebar.appendChild(table);

	for (let i = 0; i < 8; i++) {
		let tr = document.createElement('tr');
		tr.classList.add("trTableToPickColor");
		tr.id = "trPaletteId" + i;
		table.appendChild(tr);

		cellCreator(tr, i);
		
	}

	let currentColor = document.createElement('div');
	currentColor.classList.add("currentColor");
	currentColor.id = "currentColor";
	currentColor.style.background = "black";
	document.querySelector('.sidebarPalette').appendChild(currentColor);
}

function cellCreator(tr, i){

	for (let k = 0; k < 2; k++) {
			let th = document.createElement('th');
			th.classList.add("thTableToPickColor");
			th.id = "thPaletteId" + k;

			if (tr.id === "trPaletteId0" && th.id === "thPaletteId0") {th.style.background = "white";}
			if (tr.id === "trPaletteId0" && th.id === "thPaletteId1") {th.style.background = "black";}

			if (tr.id === "trPaletteId1" && th.id === "thPaletteId0") {th.style.background = "green";}
			if (tr.id === "trPaletteId1" && th.id === "thPaletteId1") {th.style.background = "blue";}
			
			if (tr.id === "trPaletteId2" && th.id === "thPaletteId0") {th.style.background = "red";}
			if (tr.id === "trPaletteId2" && th.id === "thPaletteId1") {th.style.background = "yellow";}

			if (tr.id === "trPaletteId3" && th.id === "thPaletteId0") {th.style.background = "pink";}
			if (tr.id === "trPaletteId3" && th.id === "thPaletteId1") {th.style.background = "indigo";}

			if (tr.id === "trPaletteId4" && th.id === "thPaletteId0") {th.style.background = "brown";}
			if (tr.id === "trPaletteId4" && th.id === "thPaletteId1") {th.style.background = "grey";}

			if (tr.id === "trPaletteId5" && th.id === "thPaletteId0") {th.style.background = "olive";}
			if (tr.id === "trPaletteId5" && th.id === "thPaletteId1") {th.style.background = "maroon";}

			if (tr.id === "trPaletteId6" && th.id === "thPaletteId0") {th.style.background = "crimson";}
			if (tr.id === "trPaletteId6" && th.id === "thPaletteId1") {th.style.background = "aqua";}

			if (tr.id === "trPaletteId7" && th.id === "thPaletteId0") {th.style.background = "teal";}
			if (tr.id === "trPaletteId7" && th.id === "thPaletteId1") {th.style.background = "orange";}	

			th.addEventListener('click', function (event) {pickColor(this);})
			tr.appendChild(th);
		}
}