var images = [
"../../assets/img/plat_signature/1.png",
"../../assets/img/plat_signature/2.png",
"../../assets/img/plat_signature/3.png",
"../../assets/img/plat_signature/4.png",
"../../assets/img/plat_signature/5.png",
"../../assets/img/plat_signature/6.png",
"../../assets/img/plat_signature/7.png",
"../../assets/img/plat_signature/8.png",
"../../assets/img/plat_signature/9.png",
"../../assets/img/plat_signature/10.png",
"../../assets/img/plat_signature/11.png",
"../../assets/img/plat_signature/12.png",
"../../assets/img/plat_signature/13.png",
"../../assets/img/plat_signature/14.png",
"../../assets/img/plat_signature/15.png",
"../../assets/img/plat_signature/16.jpg",
"../../assets/img/plat_signature/17.png",
"../../assets/img/plat_signature/18.png",
"../../assets/img/plat_signature/19.png",
"../../assets/img/plat_signature/20.png",
]

var reponses = [
	"",
	"",
]


/* Initialisation de la page*/
	var id = 0;
	document.getElementById("image").setAttribute("src", images[id]) ;

/* Fonctions de navigation */

	function raz() {
		document.getElementById("image").setAttribute("src", images[id]) ;
/* 		document.getElementById("solution").textContent = "Réponse";
		document.getElementById("solution").classList.add("btn"); */
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
	}

/* 	function reponse() {
		document.getElementById("solution").textContent = reponses[id] ;
		document.getElementById("solution").style.fontFamily = "Police1" ;
		document.getElementById("solution").style.paddingBottom = "10px" ;
		document.getElementById("solution").style.paddingTop = "10px" ;

	} */