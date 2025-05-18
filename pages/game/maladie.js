var images = [
	"../../assets/img/maladie/rules.png",
	"../../assets/img/maladie/1.png",
    "../../assets/img/maladie/2.png",
    "../../assets/img/maladie/3.png",
    "../../assets/img/maladie/4.png",
    "../../assets/img/maladie/5.png",
    "../../assets/img/maladie/6.png",
    "../../assets/img/maladie/7.png",
    "../../assets/img/maladie/8.png",
    "../../assets/img/maladie/9.png",
	"../../assets/img/maladie/01.png",
    "../../assets/img/maladie/02.png",
	"../../assets/img/maladie/10.png",
	"../../assets/img/maladie/rules2.png",
    "../../assets/img/maladie/11.png",
    "../../assets/img/maladie/12.png",
    "../../assets/img/maladie/13.png",
	"../../assets/img/maladie/14.png",
    "../../assets/img/maladie/15.png",
    "../../assets/img/maladie/16.png",
    "../../assets/img/maladie/17.png",
	"../../assets/img/end.png",
]

var reponses = [
	"",
	"Dexter",
	"Gabrielle Solis",
	"Tony Soprano",
	"Lucas Scott",
	"Byers",
	"Otis & Jean",
	"Meredith Grey",
	"Adrian Monk",
	"Halliwell",
	"Tom Shelby",
	"Annalise Keating",
	"El Profesor",
	"",
	"Tony Soprano",
	"Patrick Jane",
	"Morgane Alvaro",
	"El profesor",
	"Dwight Schrute",
	"Peyton Sawyer",
	"Monica Geller",


]


/* Initialisation de la page*/
	var id = 0;
	document.getElementById("image").setAttribute("src", images[id]) ;

/* Fonctions de navigation */

	function raz() {
		document.getElementById("image").setAttribute("src", images[id]) ;
 		document.getElementById("solution").textContent = "Réponse";
		document.getElementById("solution").classList.add("btn"); 
	}
	function precedent() {
		id--;
		raz();
	}

	function suivant() {
		if(id<images.length-1)
		{
			id++;
			raz();
		}
		document.getElementById("solution").classList.add("btn") ;
	}

 	function reponse() {
		document.getElementById("solution").textContent = reponses[id] ;
		document.getElementById("solution").style.style = "bold" ;
		document.getElementById("solution").classList.remove("btn") ;
	}