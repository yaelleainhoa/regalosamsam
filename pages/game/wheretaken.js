var images = [
	"../../assets/img/wheretaken/1.jpg",
	"../../assets/img/wheretaken/2.png",
	"../../assets/img/wheretaken/3.jpg",
	"../../assets/img/wheretaken/4.jpg",
	"../../assets/img/wheretaken/5.jpg",
	"../../assets/img/wheretaken/6.jpeg",
	"../../assets/img/wheretaken/7.jpg",
	"../../assets/img/wheretaken/8.png",
	"../../assets/img/wheretaken/9.png",
	"../../assets/img/wheretaken/10.jpg",
	"../../assets/img/wheretaken/11.jpeg",
	"../../assets/img/wheretaken/12.jpg",
	"../../assets/img/wheretaken/13.jpg",
	"../../assets/img/wheretaken/14.jpg",
	"../../assets/img/wheretaken/15.jpg",
	"../../assets/img/wheretaken/16.jpeg",
	"../../assets/img/wheretaken/17.jpg",
	"../../assets/img/wheretaken/18.jpg",
	"../../assets/img/wheretaken/19.JPG",
	"../../assets/img/wheretaken/20.jpg",
	"../../assets/img/wheretaken/21.jpg",
	"../../assets/img/wheretaken/22.jpeg",
	"../../assets/img/wheretaken/23.jpeg",
	"../../assets/img/wheretaken/24.JPG",
	"../../assets/img/wheretaken/25.jpg",
	"../../assets/img/wheretaken/26.jpg",
	"../../assets/img/wheretaken/27.jpg",
	"../../assets/img/wheretaken/28.jpeg",
]

var reponses = [
	"Beguinage",
	"Beguinage",
	"Aventure",
	"Camille Claudel",
	"Casablanca",
	"Bruges - Octobre 2023",
	"Donjon Bouftou",
	"Tour HxH examen",
	"Syrup Village",
	"Naruto grenouilles land",
	"Lac du Héron Janvier 2024",
	"Seattle",
	"Toronto",
	"Monaco",
	"Meudon",
	"Bouillon, Belgique Juillet 2024",
	"Empire DE raviolis",
	"Hendaye",
	"Jacques Prévert",
	"Jouffroy Formation",
	"San mames",
	"Boulogne sur mer Septembre 2024",
	"Osaka",
	"Mosquée de Paris",
	"Pont de Bois",
	"Montebello",
	"Palacium",
	"Gamboa (!!!) Octobre 2024"
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