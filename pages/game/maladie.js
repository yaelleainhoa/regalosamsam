var images = [
	"../../assets/img/backview/rules.jpeg",
    "../../assets/img/backview/holt.jpg",
	"../../assets/img/backview/orochimaru.png",
    "../../assets/img/backview/mark.jpg",
    "../../assets/img/backview/bree.jpg",
    "../../assets/img/backview/ichiraku.png",
    "../../assets/img/backview/koby.png",
    "../../assets/img/backview/kabuto.png",
    "../../assets/img/backview/eddie.jpg",
    "../../assets/img/backview/luffy.png",
    "../../assets/img/backview/hinata.png",
	"../../assets/img/backview/amelia.jpg",
    "../../assets/img/backview/lucasnathan.jpg",
	"../../assets/img/backview/shino.png",
	"../../assets/img/backview/michael.jpg",
    "../../assets/img/backview/barney.jpg",
    "../../assets/img/backview/gabrielle.jpg",
    "../../assets/img/backview/friends.jpg",
	"../../assets/img/backview/tashigi.png",
    "../../assets/img/backview/cristinameredith.png",
    "../../assets/img/backview/jayceviktor.jpg",
	"../../assets/img/backview/end.jpg",
]

var reponses = [
	"",
	"Holt (B99)",
	"Orochimaru",
	"Mark Scout",
	"Bree Van de Kamp",
	"Ichiraku",
	"Koby",
	"Kabuto",
	"Eddie Britt",
	"Luffy",
	"Hinata",
	"Amelia Shepard",
	"Lucas Scott & Nathan Scott",
	"Shino",
	"Michael Scott",
	"Barney Stinson",
	"Gabrielle Solis",
	"Friends tous là",
	"Tashigi",
	"Cristina et Meredith",
	"Viktor et Jayce",
	""
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