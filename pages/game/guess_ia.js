var images = [
"../../assets/img/guess_ia/1.png",
"../../assets/img/guess_ia/2.png",
"../../assets/img/guess_ia/3.png",
"../../assets/img/guess_ia/4.png",
"../../assets/img/guess_ia/5.png",
"../../assets/img/guess_ia/6.png",
"../../assets/img/guess_ia/7.png",
"../../assets/img/guess_ia/8.png",
"../../assets/img/guess_ia/9.png",
"../../assets/img/guess_ia/10.png",
"../../assets/img/guess_ia/11.png",
"../../assets/img/guess_ia/12.png",
"../../assets/img/guess_ia/13.png",
"../../assets/img/guess_ia/14.png",
"../../assets/img/guess_ia/15.png",
"../../assets/img/guess_ia/16.png",
"../../assets/img/guess_ia/17.png",
"../../assets/img/guess_ia/18.png",
"../../assets/img/guess_ia/19.png",
"../../assets/img/guess_ia/20.png",
"../../assets/img/guess_ia/21.png",
"../../assets/img/guess_ia/22.png",
"../../assets/img/guess_ia/23.png",
"../../assets/img/guess_ia/24.png",
"../../assets/img/guess_ia/25.png",
"../../assets/img/guess_ia/26.png",
"../../assets/img/guess_ia/27.png",
"../../assets/img/guess_ia/28.png",
"../../assets/img/guess_ia/29.png",
"../../assets/img/guess_ia/30.png",
"../../assets/img/guess_ia/31.png",
"../../assets/img/guess_ia/32.png",
"../../assets/img/guess_ia/33.png",
"../../assets/img/guess_ia/34.png",
"../../assets/img/guess_ia/35.png",
"../../assets/img/guess_ia/36.png",
"../../assets/img/guess_ia/37.png",
"../../assets/img/guess_ia/38.png",
"../../assets/img/guess_ia/39.png",
"../../assets/img/guess_ia/40.png",
"../../assets/img/guess_ia/41.png",
"../../assets/img/guess_ia/42.png",
"../../assets/img/guess_ia/43.png",
"../../assets/img/guess_ia/44.png",
"../../assets/img/guess_ia/45.png",
"../../assets/img/guess_ia/46.png",
"../../assets/img/guess_ia/47.png",
"../../assets/img/guess_ia/48.png",
"../../assets/img/guess_ia/49.png",
"../../assets/img/guess_ia/50.png",
"../../assets/img/guess_ia/51.png",
"../../assets/img/guess_ia/52.png",
"../../assets/img/guess_ia/53.png",
"../../assets/img/guess_ia/54.png",
"../../assets/img/guess_ia/55.png",
"../../assets/img/guess_ia/56.png",
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

