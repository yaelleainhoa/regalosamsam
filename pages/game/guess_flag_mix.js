var images = [
	"../../assets/img/guess_flag_mix/1.png",
"../../assets/img/guess_flag_mix/2.png",
"../../assets/img/guess_flag_mix/3.png",
"../../assets/img/guess_flag_mix/4.png",
"../../assets/img/guess_flag_mix/5.png",
"../../assets/img/guess_flag_mix/6.png",
"../../assets/img/guess_flag_mix/7.png",
"../../assets/img/guess_flag_mix/8.png",
"../../assets/img/guess_flag_mix/9.png",
"../../assets/img/guess_flag_mix/10.png",
"../../assets/img/guess_flag_mix/11.png",
"../../assets/img/guess_flag_mix/12.png",
"../../assets/img/guess_flag_mix/13.png",
"../../assets/img/guess_flag_mix/14.png",
"../../assets/img/guess_flag_mix/15.png",
"../../assets/img/guess_flag_mix/16.png",
"../../assets/img/guess_flag_mix/17.png",
"../../assets/img/guess_flag_mix/18.png",
"../../assets/img/guess_flag_mix/19.png",
"../../assets/img/guess_flag_mix/20.png",
"../../assets/img/guess_flag_mix/21.png",
"../../assets/img/guess_flag_mix/22.png",
"../../assets/img/guess_flag_mix/23.png",
"../../assets/img/guess_flag_mix/24.png",
"../../assets/img/guess_flag_mix/25.png",
"../../assets/img/guess_flag_mix/26.png",
"../../assets/img/guess_flag_mix/27.png",
"../../assets/img/guess_flag_mix/28.png",
"../../assets/img/guess_flag_mix/29.png",
"../../assets/img/guess_flag_mix/30.png",
"../../assets/img/guess_flag_mix/31.png",
"../../assets/img/guess_flag_mix/32.png",
"../../assets/img/guess_flag_mix/33.png",
"../../assets/img/guess_flag_mix/34.png",
"../../assets/img/guess_flag_mix/35.png",
"../../assets/img/guess_flag_mix/36.png",
"../../assets/img/guess_flag_mix/37.png",
"../../assets/img/guess_flag_mix/38.png",
"../../assets/img/guess_flag_mix/39.png",
	"../../assets/img/end.png",
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