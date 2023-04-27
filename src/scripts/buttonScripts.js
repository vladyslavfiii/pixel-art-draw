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








function PrintDiv(div)
{
    html2canvas((div), {
        onrendered: function(canvas) {
            var myImage = canvas.toDataURL();
            downloadURI(myImage, "MaSimulation.png");
      }
    });
}

function downloadURI(uri, name) {
    var link = document.createElement("a");

    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();   
    //after creating link you should delete dynamic link
    //clearDynamicLink(link); 
}