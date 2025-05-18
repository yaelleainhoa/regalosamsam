var images = [
	"../../assets/img/devineperso/rules.jpg",
	"../../assets/img/devineperso/q0.jpg",
	"../../assets/img/devineperso/r0.jpg",
	"../../assets/img/devineperso/q1.jpg",
	"../../assets/img/devineperso/r1.jpg",
	"../../assets/img/devineperso/q2.jpg",
	"../../assets/img/devineperso/r2.jpg",
	"../../assets/img/devineperso/q3.jpg",
	"../../assets/img/devineperso/r3.jpg",
	"../../assets/img/devineperso/q4.jpg",
	"../../assets/img/devineperso/r4.jpg",
	"../../assets/img/devineperso/q6.jpg",
	"../../assets/img/devineperso/r6.jpg",
	"../../assets/img/devineperso/q7.jpg",
	"../../assets/img/devineperso/r7.jpg",
	"../../assets/img/devineperso/q8.jpg",
	"../../assets/img/devineperso/r8.jpg",
	"../../assets/img/devineperso/q9.jpg",
	"../../assets/img/devineperso/r9.jpg",
	"../../assets/img/devineperso/q10.jpg",
	"../../assets/img/devineperso/r10.jpg",
	"../../assets/img/devineperso/q11.jpg",
	"../../assets/img/devineperso/r11.jpg",
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