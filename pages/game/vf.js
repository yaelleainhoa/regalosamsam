images_recto  = // Ici les chemins des cartes Memory
[ 
	
	"../../assets/img/vf/0.png",
	"../../assets/img/vf/1.png",
	"../../assets/img/vf/2.png",
	"../../assets/img/vf/3.png",
	"../../assets/img/vf/4.png",
	"../../assets/img/vf/5.png",
	"../../assets/img/vf/6.png",
	"../../assets/img/vf/7.png",
	"../../assets/img/vf/8.png",
	"../../assets/img/vf/9.png",
	"../../assets/img/vf/10.png",
	"../../assets/img/vf/11.png",
	"../../assets/img/vf/12.png",
	"../../assets/img/vf/13.png",
	"../../assets/img/vf/14.png",
	"../../assets/img/vf/15.png",
	"../../assets/img/vf/16.png",
	"../../assets/img/vf/17.png",
	"../../assets/img/vf/18.png",
	"../../assets/img/vf/19.png",
	"../../assets/img/vf/20.png",
	"../../assets/img/vf/21.png",
	"../../assets/img/vf/22.png",
	"../../assets/img/vf/23.png",
	"../../assets/img/vf/24.png",
	"../../assets/img/vf/25.png",
	"../../assets/img/vf/26.png",
	"../../assets/img/vf/27.png",
	"../../assets/img/vf/28.png",
	"../../assets/img/vf/29.png",
]

reponses = // Ici le paramétrage des couples de cartes Memory
[ 
	
	"D",
	"E",
	"A",
	"G",
	"H",
	"B",
	"F",
	"C",
	"I",
	"I",
	"K",
	"J",
	"L",
	"A",
	"L",
	"G",
	"E",
	"M",
	"F",
	"O",
	"N",
	"O",
	"K",
	"D",
	"J",
	"N",
	"M",
	"C",
	"H",
	"B",
]

// Initialisation des variables et des constantes
	const verso_image = "../../assets/img/vf/verso.png"; // Initialisation du verso de l'image
	var nbrCartes = images_recto.length;// Création de la variable qui reprend le nombre de cartes
	var i = 0;
	var tour = 0; // initialisation du nombre de tours soit 0, 1 ou 2 (représente le nombre de cartes retournées dans la manche) 

// Initialisation des indices des cartes retournées
	var indice_carte1 = -1; // id de la première carte retournée
	var indice_carte2 = -1; // id de la deuxième carte retournée

// Création du tableau qui résume les cartes affichées ("oui") et les cartes cachées ("non")
	statut_affichage = []; 

// Création du tableau de deux valeurs qui teste si ces deux cartes sont une paire 
	cartes_affichees = []; 


// Création de la structure HTML

	for (let i = 0; i < nbrCartes; i++) 
		{
			// Création du container qui comprend l'image et le filtre vert si la réponse est bonne
				const container = document.createElement('div');
				container.className = 'image-container';

			// Création de l'image
				const img = document.createElement('img'); // Création de l'image
				img.id = `image${i}`; // Attribution de l'id à l'image
				img.src = verso_image; // Affichage du verso de la carte
				container.classList.toggle('clickable'); // permet de changer l'affichage au clic

			// Création de l'élément permettant d'ajouter un voile vert
				const overlay = document.createElement('div'); // Création de l'objet
				overlay.className = 'overlay'; // Attribution de la classe de l'objet
				overlay.id = `overlay${i}`; // Attribution de l'id de l'objet

			// Création des liens entre les objets	
				container.appendChild(img); // Création de la relation imbriquée container/img
				container.appendChild(overlay); // Création de la relation imbriquée container/voile
				gallery.appendChild(container); // Création de la relation imbriquée page/container

			// Remplissage du tableau reprenant le statut d'affichage (non) des cartes 
				statut_affichage.push("non");

		}

// Création d'un ensemble de tous les éléments "clickables"
const items = document.querySelectorAll('.clickable');

// 

function cacherCartes() {
	for (let p = 0; p < nbrCartes; p++) {
		if (statut_affichage[p] == "cache") {
			
			var imageACacher = 'image' + p;
			var filtreACacher = 'overlay' + p;

			document.getElementById(imageACacher).style.display = "none" ;
			document.getElementById(filtreACacher).style.display = "none" ;

		};

	}
	
}

var test_indice_image1 = 0;
var test_indice_image2 = 0;

function agrandirCarte (event) {
	
	const target = event.currentTarget;
	const enfants = target.children;
	const idImageComplet = enfants[0].id;
	const idImage = enfants[0].id.match(/\d+/g).join('');

	const popup = document.getElementById('popup');


	if (idImage == indice_carte1 || idImage == indice_carte2) {
		const popup = document.getElementById('popup');
		popup.style.display = "block";
		document.getElementById('popup-image').src = images_recto[idImage];	

	}
	

}

function reduireCarte (event) {
	popup.style.display = "none";
	console.log(popup.style.display);
	
}

function retournerCarte(event) 
{
	if (tour == 4) {
		indice_carte1 = -1;
		indice_carte2 = -1;
		tour = 0;
		cartes_affichees =[];
		document.getElementById(test_indice_image1).src = verso_image; 
		document.getElementById(test_indice_image2).src = verso_image;

	}

	if (tour == 3){
		indice_carte1 = -1;
		indice_carte2 = -1;
		tour = 0;
		cartes_affichees =[];
	}


	cacherCartes();
	const id = event.target.id; // Récupère l'ID de l'élément cliqué
	const indiceClic = id.match(/\d+/g).join(''); // Récupérer le numéro de l'id
	const imgSelectionne = document.getElementById(id); // Récupérer la carte à retourner
	imgSelectionne.src = images_recto[indiceClic]; // Retourner la carte


	// Récupération de la valeur de la première carte retournée
		if (indice_carte1==-1) 
			{
				indice_carte1 = indiceClic;
				cartes_affichees.push(reponses[indiceClic]);
			} 

	// Récupération de la valeur de la deuxième carte retournée
		else 
			{
				indice_carte2= indiceClic; 
				if (indice_carte1==indice_carte2) {
					tour = 0;
					indice_carte2=-1;
				}

				else{
					cartes_affichees.push(reponses[indiceClic]);
				}
			
			}
	
	
	// Mise à jour du nombre de tours passés dans la manche
	tour ++;

	// Paramétrage pour éviter des erreurs si 2 clics sur la même carte
		if (tour ==2 && indice_carte1==indice_carte2)
		{
			tour=1;
			indice_carte2=-1;
		}

	// Vérification de la valeur des deux cartes
		else if (tour==2) 
			{
				var indice_image1 = 'image' + indice_carte1; //
				var filtre_image1 = 'overlay' + indice_carte1; //
				test_indice_image1
				var indice_image2 = 'image' + indice_carte2; //
				var filtre_image2 = 'overlay' + indice_carte2; //
				test_indice_image1 = indice_image1;
				test_indice_image2 = indice_image2;
						
			// Si les deux cartes forment une bonne paire, alors ces deux cartes restent affichées
				if(cartes_affichees[0]==cartes_affichees[1]) 
					{
						statut_affichage[indice_carte1] ="oui";
						statut_affichage[indice_carte2] ="oui";

						document.getElementById(indice_image1).style.opacity = 1;
						document.getElementById(filtre_image1).style.backgroundColor = '#006400';
						document.getElementById(filtre_image1).style.opacity = 0.5 ;
						document.getElementById(filtre_image1).style.display = "block" ;
						statut_affichage[indice_carte1]="cache";

						document.getElementById(indice_image2).style.opacity = 1;
						document.getElementById(filtre_image2).style.backgroundColor = '#006400';
						document.getElementById(filtre_image2).style.opacity = 0.5 ;
						document.getElementById(filtre_image2).style.display = "block" ;
						statut_affichage[indice_carte2]="cache";
						tour = 3;

					}

				else {
					tour = 4; //
				}
				
				
	
}


}
// Ajoute un écouteur d'événements à chaque élément
items.forEach
	(
		item => {
		item.addEventListener('click', retournerCarte);
		item.addEventListener('mouseenter', agrandirCarte);
		item.addEventListener('mouseleave', reduireCarte);
		
			});


