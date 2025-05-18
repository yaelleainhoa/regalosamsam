var images = [
	"../../assets/img/guess_wardrobe/1.png",
"../../assets/img/guess_wardrobe/2.png",
"../../assets/img/guess_wardrobe/3.png",
"../../assets/img/guess_wardrobe/4.png",
"../../assets/img/guess_wardrobe/5.png",
"../../assets/img/guess_wardrobe/6.png",
"../../assets/img/guess_wardrobe/7.png",
"../../assets/img/guess_wardrobe/8.png",
"../../assets/img/guess_wardrobe/9.png",
"../../assets/img/guess_wardrobe/10.png",
"../../assets/img/guess_wardrobe/11.png",
"../../assets/img/guess_wardrobe/12.png",
"../../assets/img/guess_wardrobe/13.png",
"../../assets/img/guess_wardrobe/14.png",
"../../assets/img/guess_wardrobe/15.png",
"../../assets/img/guess_wardrobe/16.png",
"../../assets/img/guess_wardrobe/17.png",
"../../assets/img/guess_wardrobe/18.png",
"../../assets/img/guess_wardrobe/19.png",
"../../assets/img/guess_wardrobe/20.png",
"../../assets/img/guess_wardrobe/21.png",
"../../assets/img/guess_wardrobe/22.png",
"../../assets/img/guess_wardrobe/23.png",
"../../assets/img/guess_wardrobe/24.png",
"../../assets/img/guess_wardrobe/25.png",
"../../assets/img/guess_wardrobe/26.png",
"../../assets/img/guess_wardrobe/27.png",
"../../assets/img/guess_wardrobe/28.png",
"../../assets/img/guess_wardrobe/29.png",
"../../assets/img/guess_wardrobe/30.png",
"../../assets/img/guess_wardrobe/31.png",
"../../assets/img/guess_wardrobe/32.png",
"../../assets/img/guess_wardrobe/33.png",
"../../assets/img/guess_wardrobe/34.png",
"../../assets/img/guess_wardrobe/35.png",
"../../assets/img/guess_wardrobe/36.png",
"../../assets/img/guess_wardrobe/37.png",
"../../assets/img/guess_wardrobe/38.png",
"../../assets/img/guess_wardrobe/39.png",
"../../assets/img/guess_wardrobe/40.png",
"../../assets/img/guess_wardrobe/41.png",
"../../assets/img/guess_wardrobe/42.png",
"../../assets/img/guess_wardrobe/43.png",
"../../assets/img/guess_wardrobe/44.png",
"../../assets/img/guess_wardrobe/45.png",
"../../assets/img/guess_wardrobe/46.png",
"../../assets/img/guess_wardrobe/47.png",
"../../assets/img/guess_wardrobe/48.png",
"../../assets/img/guess_wardrobe/49.png",
"../../assets/img/guess_wardrobe/50.png",
"../../assets/img/guess_wardrobe/51.png",
"../../assets/img/guess_wardrobe/52.png",
"../../assets/img/guess_wardrobe/53.png",
"../../assets/img/guess_wardrobe/54.png",
"../../assets/img/guess_wardrobe/55.png",
"../../assets/img/guess_wardrobe/56.png",
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