images  = [
	
	"../../assets/img/wiki/1.png", //1
	"../../assets/img/wiki/2.png", //2
	"../../assets/img/wiki/3.png", //3
	"../../assets/img/wiki/4.png", //4
	"../../assets/img/wiki/5.png", //5
	"../../assets/img/wiki/6.png", //6
	"../../assets/img/wiki/7.png", //8
	"../../assets/img/wiki/8.png", //9
	"../../assets/img/wiki/9.png", //10
	"../../assets/img/wiki/10.png", //0
	
]


reponses = [
	"Architecte",
	"Bibliothécaire",
	"Député ou députée du Nord",
	"Inspecteur ou inspectrice du travail",
	"Joueur ou joueuse de basket",
	"Joueur ou joueuse de foot",
	"Militaire au sein de l'armée de l'air",
	"Ministre de l'enseignement supérieur",
	"Professeur d'allemand",
	"Vendeur ou vendeuse de meuble"
	
]

bonnes_reponses = [
	"Joueur ou joueuse de basket",
	"Ministre de l'enseignement supérieur",
	"Joueur ou joueuse de foot",
	"Inspecteur ou inspectrice du travail",
	"Bibliothécaire",
	"Député ou députée du Nord",
	"Militaire au sein de l'armée de l'air",
	"Professeur d'allemand",
	"Architecte",
	"Vendeur ou vendeuse de meuble"
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
	"",
	"",

] 

function setFunctionsAndCurves(){
	var imagesToDropArea = document.getElementById("imagesToDrop");
	var textsToDragArea = document.getElementById("textsToDrag");
	for (let i = 0 ; i < reponses.length ; i++)
	{
		console.log(i);
		var imageToDropArea = document.createElement("div");
		var imageToDropImg = document.createElement("img");
		imageToDropImg.classList.add("image");
		imageToDropImg.setAttribute("src", images[i]);
		imageToDropImg.setAttribute("id", i);
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