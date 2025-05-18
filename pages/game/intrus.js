images  = [
	"../../assets/img/intrus/1.png", //1
	"../../assets/img/intrus/2.png", //2
	"../../assets/img/intrus/3.png", //3
	"../../assets/img/intrus/4.png", //4
	"../../assets/img/intrus/5.png", //5
	"../../assets/img/intrus/6.png", //6
	"../../assets/img/intrus/7.png", //7
	"../../assets/img/intrus/8.png", //8

]

reponses = [
	"Bob Dylan obtient le Prix de Nobel de littérature",
	"Décès de Michael Jackson",
	"Fin du règne de la Barcina",
	"Première publication de la version française en volumes reliés par Glénat",
	"Sortie de Grey's Anatomy",
	"Sortie du film Supercondrique",
	"Un nigérian est drafté n°1 en NBA",
	"Victoire de la Real Sociedad à la coupe du roi",
	
]

bonnes_reponses = [
	"Sortie de Grey's Anatomy",
	"Première publication de la version française en volumes reliés par Glénat",
	"Victoire de la Real Sociedad à la coupe du roi",
	"Sortie du film Supercondrique",
	"Un nigérian est drafté n°1 en NBA",
	"Décès de Michael Jackson",
	"Fin du règne de la Barcina",
	"Bob Dylan obtient le Prix de Nobel de littérature",

]

score  = [
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
] 

function setFunctionsAndCurves(){
	var imagesToDropArea = document.getElementById("imagesToDrop");
	var textsToDragArea = document.getElementById("textsToDrag");
	for (let i = 0 ; i < reponses.length ; i++)
	{
		var imageToDropArea = document.createElement("div");
		var imageToDropImg = document.createElement("img");
		imageToDropImg.classList.add("image");
		imageToDropImg.setAttribute("src", images[i]);
		imageToDropImg.addEventListener("click", function() {
			if (this.requestFullscreen) {
			  this.requestFullscreen();
			} else if (this.msRequestFullscreen) {
			  this.msRequestFullscreen();
			} else if (this.mozRequestFullScreen) {
			  this.mozRequestFullScreen();
			} else if (this.webkitRequestFullscreen) {
			  this.webkitRequestFullscreen();
			}
		  });
		imageToDropArea.setAttribute("id", "prop"+i);
		imageToDropArea.setAttribute("ondrop", "dragDrop(event)");
		imageToDropArea.setAttribute("ondragover", "allowDrop(event)");
		imageToDropArea.classList.add("imageToDrop");
		imageToDropArea.appendChild(imageToDropImg);

		imagesToDropArea.appendChild(imageToDropArea);

		var textToDragArea = document.createElement("div");
		textToDragArea.innerText = reponses[i];
		textToDragArea.setAttribute("id","drag"+i);
		textToDragArea.setAttribute("ondrop","dragDrop(event)");
		textToDragArea.setAttribute("ondragover","allowDrop(event)");
		textToDragArea.setAttribute("draggable","true");
		textToDragArea.setAttribute("ondragstart","dragStart(event)");
		textToDragArea.classList.add("textToDrag");
		textToDragArea.classList.add("draggable");

		textsToDragArea.appendChild(textToDragArea);
	}
}

setFunctionsAndCurves();

var reponse_select = ""
var image_selectionne = 10
var indice = 0

function allowDrop(ev) {
	ev.preventDefault();
}
function dragStart(ev) {
	ev.dataTransfer.setData("text", ev.target.id);
}

function dragDrop(ev) {
	ev.preventDefault();

	reponse_select = ev.target.id
	indice = reponse_select.substr(-1)

	if(reponse_select)
	{
		var data = ev.dataTransfer.getData("text");
		ev.target.appendChild(document.getElementById(data));
		ev.target.style.paddingBottom = "5px";
	}

	textToDrag_selected = document.getElementById(data).innerText;
	score[indice] = textToDrag_selected

	
	
}


function resultat_final()
{
	var carreau = ""
	for (let i = 0 ; i < reponses.length ; i++) 
	{
		if (bonnes_reponses[i] == score[i]) 
		{
			carreau = "prop" + i.toString()
			document.getElementById(carreau).style.backgroundColor = "#C6E5BA"
		}

		else 
		{
			carreau = "prop" + i.toString()
			document.getElementById(carreau).style.backgroundColor = "#FF6961"

			var goodAnswer = document.createElement("div");
			goodAnswer.innerText = bonnes_reponses[i];
			goodAnswer.classList.add("textToDrag");
			goodAnswer.style.color="white";
			document.getElementById(carreau).appendChild(goodAnswer);
		}
		
	}
}