var images = [
"../../assets/img/translate_music/1.png",
"../../assets/img/translate_music/2.png",
"../../assets/img/translate_music/3.png",
"../../assets/img/translate_music/4.png",
"../../assets/img/translate_music/5.png",
"../../assets/img/translate_music/6.png",
"../../assets/img/translate_music/7.png",
"../../assets/img/translate_music/8.png",
"../../assets/img/translate_music/9.png",
"../../assets/img/translate_music/10.png",
"../../assets/img/translate_music/11.png",
"../../assets/img/translate_music/12.png",
"../../assets/img/translate_music/13.png",
"../../assets/img/translate_music/14.png",
"../../assets/img/translate_music/15.png",
"../../assets/img/translate_music/16.png",
"../../assets/img/translate_music/17.png",
"../../assets/img/translate_music/18.png",
"../../assets/img/translate_music/19.png",
"../../assets/img/translate_music/20.png",
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