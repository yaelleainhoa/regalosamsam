var i = 100;
var bonneslettres = 'guitarefolkbsdpnq';
var compteur = 0


function Lancer_musique(id) {
	i = id
	document.getElementById("reponse").textContent="RÉPONSE";
	document.getElementById("enonce").textContent=regles[id];
	lettre = document.getElementById(i).textContent.toLowerCase();
	document.getElementById("audio").setAttribute("src",sons[i])
}


function bonne_reponse()
{
	document.getElementById(i).style.color = "white";
	document.getElementById(i).style.backgroundColor = "#C1E1C1";
	

		
}

function reponse () {
	document.getElementById("reponse").textContent=reponses[i];
}


function mauvaise_reponse(){

	
	document.getElementById(i).style.color = "white";
	document.getElementById(i).style.backgroundColor = "#FF5733";

}


var sons = [
	
	"../../assets/son/son1.mp3",
	"../../assets/son/son2.mp3",
	"../../assets/son/son3.mp3",
	"../../assets/son/son4.mp3",
	"../../assets/son/son5.mp3",
	"../../assets/son/son6.mp3",
	"../../assets/son/son7.mp3",
	"../../assets/son/son8.mp3",
	"../../assets/son/son9.mp3",
	"../../assets/son/son10.mp3",
	"../../assets/son/son11.mp3",
	"../../assets/son/son12.mp3",
	"../../assets/son/son13.mp3",
	"../../assets/son/son14.mp3",
	"../../assets/son/son15.mp3",
	"../../assets/son/son16.mp3",
	"../../assets/son/son17.mp3",
	"../../assets/son/son18.mp3",
	"../../assets/son/son19.mp3",
	"../../assets/son/son20.mp3",
	"../../assets/son/son21.mp3",
	"../../assets/son/son22.mp3",
	"../../assets/son/son23.mp3",
	"../../assets/son/son24.mp3",
	"../../assets/son/son25.mp3",
	"../../assets/son/son26.mp3",

]

var regles = [

	"Complétez les paroles ...",
	"Complétez les paroles ...",
	"Complétez les paroles ...",
	"Complétez les paroles ...",
	"Complétez les paroles ...",


	"Complétez les paroles ...",
	"Complétez les paroles ...",
	"Quelle saison ? Quel épisode ?",
	"Complétez les paroles ...",
	"A cause de quoi ?",

	"Quelle scène entend-t-on ?",
	"Qui est pas très en forme lors de cette scène ?",
	"Complétez les paroles ...",
	"Quel produit est vendu dans cette pub ?",
	"Complétez les paroles ...",


	"Que se passe-t-il ?",
	"Complétez les paroles ...",
	"Complétez les paroles ...",
	"Complétez les paroles ...",
	"Complétez les paroles ...",

	"Complétez les paroles ...",
	"Complétez les paroles ...",
	"Complétez les paroles ...",
	"Complétez les paroles ...",
	"Quel mariage ?",

	"Complétez les paroles ...",
	
]

var reponses = [

	
	"Ohé saboteur, attention à ton fardeau, dynamite!",
	"Y bailar toda la noche!",
	"Comme des oriflammes le long des berges mortes",
	"Que es la misma de Tudela hasta el Roncal",
	"Ez zen gehiago txoria izango",

	"Même à tes amis, surtout à tes amis",
	"De l'éveiller",
	"Saison 1, Episode 1",
	"Il faut aussi aller au travail",
	"De la météo",

	"Demande en mariage Chandler/Monica",
	"Nairobi",
	"Le roi, la loi, la liberté",
	"San Miguel",
	"I would not draft myself either",

	"Demande en mariage de Matthew à April",
	"Y la dueña de todo mi amor",
	"Alors j'fais Vodka-Schweppes Agrum",
	"Palestine",
	"Plutôt qu'être seul, mieux vaut être mal accompagné",
	
	"Con mi cuatrico voy cantando, mi burrito va trotando",
	"Vêtements",
	"Entends-tu les clochettes tintinnabuler",
	"Brilla la estrella de paz",
	"Karev & Izzie",

	"In a one-horse open sleigh",


]
