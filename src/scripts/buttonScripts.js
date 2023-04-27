function draw(cell) {
	cell.style.background = document.querySelector(".currentColor").style.background;
}

function resize(){
	let workspace = document.querySelector('#pixelArtDrawWorkspace');
	let inputSize = document.querySelector('#resizeInputField');

	if (Number(inputSize.value) >= 2 && Number(inputSize.value) <= 64) {
		workspace.removeChild(workspace.children[0]);
		inputSize.classList.replace('resizeErrorInputField', 'resizeInputField');
		tableCreator(inputSize.value);
	}
	else inputSize.classList.replace('resizeInputField', 'resizeErrorInputField');
}

function reset(){

	let workspace = document.querySelector('#pixelArtDrawWorkspace');
	let inputSize = document.querySelector('#resizeInputField');
	let tableSize = Number(document.querySelector('#tableToDraw').childElementCount);

	inputSize.classList.replace('resizeErrorInputField', 'resizeInputField');

	workspace.removeChild(workspace.children[0]);
	tableCreator(tableSize);
}

function pickColor(color){
	document.querySelector(".currentColor").style.background = color.style.background;
}