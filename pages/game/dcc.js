var questions_reponses = [
	["Martin - Dans quelles circonstances (quel est l'évèvement déclencheur) décède Lexie Grey ?",
		[
			"Yaëlle mime l'évènement",
			"Aitor dessine l'évènement",
			"Tu peux poser 10 questions (Oui et Non) à la personne que tu veux",
			"Accident d'avion",
		]],
	["Lan - Quel est le nom de la chaîne Youtube de Kevin & Henry Tran ?",
		[
			"Aitor dit le nom de la chaîne mais en utilisant des contraires (exemple : au lieu de le jour se lève : la nuit se couche)",
			"Yaëlle mime le nom",
			"Samuel dessine le nom",
			"Le rire jaune",
		]],
	["Sam - Quel est le mot manquant dans le nom de cette fameuse thèse Dualité entre homologie d'[mot à déviner] et cohomologie L² ?",
		[
			"Yaëlle dessine le mot en demandant de l'aide à papa",
			"Lan mime le mot en demandant de l'aide à papa if needed",
			"Papa explique sa thèse sans dire ce mot",
			"Intersection"
		]],
	["Aitor - De quel pays vient le joueur à qui Jokic a fait le plus de passes décisives ?",
		[
			"Samuel dessine le drapeau du pays",
			"Lan prend l'accent de ce pays (peut demander de l'aide à Sam pour le pays)",
			"Papa l'a vu cet été aux JO, à toi de le questionner",
			"Canada"
		]],
	["Yaëlle - Quel est le chef lieu de l'Allier ?",
		[
			"Samuel cite les quartiers de Lille qui connaît, et tu retrouves le bon chef lieu.",
			"Aitor dessine le chef lieu (il peut prendre son téléphone et faire la recherche)",
			"Aitatxo dessine le chef lieu (il peut prendre son téléphone et faire la recherche)",
			"Moulins",
		]],

	["Martin - Monk a eu 2 assistantes : Sharona & ?? ?",
		[
			"Aitor peut citer d'autres personnes avec le même prénom en disant leur nom de famille.",
			"Lan peut citer d'autres personnes avec le même prénom en disant leur nom de famille.",
			"Samuel fait un rébus.",
			"Nathalie",
		]],
	["Lan - Quel joueur a marqué le plus de triple double de l'histoire en NBA ?",
		[
			"Aitor peut t'aider, tu peux dire un joueur du Top 10.",
			"Martin peut t'aider, c'est le meneur backup des Nuggets cette année.",
			"Samuel peut te traduire son nom en anglais.",
			"Westbrook",
		]],
	["Sam - Que veut dire Hegoak ebaki banizkio ?",
		[
			"Papa peut te le traduire en espagnol",
			"Maman te traduit cette phrase Wenn ich ihm die Flügel gestutzt hätte",
			"Amaya chante la chanson et te donnera la réponse si tu tiens jusqu'au refrain",
			"Si je lui avais coupé les ailes",
		]],
	["Aitor - A quel poste jouait Maxime au rugby ?",
		[
			"Samuel peut t'aider, tu peux dire le numéro avec une marge d'erreur de 5.",
			"Yaëlle te dessine le poste (elle peut me demander le poste)",
			"Papa peut te dire les postes qu'il connaît au rugby",
			"8 ou troisième ligne centre",
		]],
	["Yaëlle - Cite 3 sportifs français qui ont gagné une médaille d'or olympique cet été ?",
		[
			"Maman peut te mimer leurs sports et si c'est le bon sport tu as gagné.",
			"Papa peut t'aider à trouver le nom d'un médaillé (quelque soit la couleur) espagnol.",
			"Aitor peut t'aider dans ta réflexion.",
			"Léon Marchand, Antoine Dupont, Teddy Riner.."
		]],
	["Martin - Que veut dire AFK ?",
		[
			"Aitor peut t'expliquer le contexte de ce terme en utilisant tous les mots qu'il veut en français.",
			"Yaëlle peut dessiner la situation.",
			"Samuel peut mimer la situation.",
			"Away From the Keyboard"
		]],
	["Lan - Comment s'appellent les 4 desperate housewives ?",
		[
			"Tu peux en dire que 2 avec l'aide de qui tu veux.",
			"Tu peux dire le nom d'un de leur mari chacune avec l'aide de qui tu veux.",
			"Yaëlle peut te dire leur nom de famille.",
			"Lynette, Bree, Susan et Gabrielle."
		]],
	["Sam - Comment s'appelle le youtubeur aux grandes lunettes qui accompagne Pierre Croce ?",
		[
			"Yaëlle peut t'aider en disant tous les mots du monde sauf les 2 qui composent son blaze.",
			"Aitor peut t'aider en disant tous les mots du monde sauf les 2 qui composent son blaze.",
			"Tu peux demander à papa ou maman de citer 3 youtubers et s'ils ont bon tu peux utiliser l'indice facile pour le même nombre de points.",
			"Lucas Studio"
		]],
	["Aitor - Quel joueur porte le numéro 9 de l'Athletic ?",
		[
			"Yaëlle peut t'aider en disant tous les prénoms basques qu'elle connaît",
			"Papa peut te donner ses initiales.",
			"Samuel peut t'expliquer son style de jeu pour t'aider",
			"Iñaki Williams"
		]],
	["Yaëlle - Qui a gagné le ballon d'or cette année ?",
		[
			"Lan peut t'aider à trouver son pays, pour chaque pays, Sam te donnera un nom de joueur, si tu as le bon pays il te donnera le bon nom.",
			"Aitor peut t'aider, et tu peux dire un autre ballon d'or des 10 dernières années.",
			"Martin peut te dire son pays et son club pour t'aider.",
			"Rodri"
		]],
	
];


var numeroQuestion = 0;
var test = "";
document.getElementById("next").style.backgroundColor = "#226760";
document.getElementById("previous").style.backgroundColor = "#226760";
document.getElementById("next").style.color = "white";
document.getElementById("question").textContent = questions_reponses[0][0];
document.getElementById("previous").style.backgroundColor = "#BF382A";

/* Navigation entre les questions */

function raz() {
	if (numeroQuestion == questions_reponses.length - 1) {
		document.getElementById("zone-indice").style.display = "none";
		document.getElementById("next").style.backgroundColor = "#BF382A";
	}
	else if (numeroQuestion == 0) {
		document.getElementById("previous").style.backgroundColor = "#BF382A";
	}

	document.getElementById("zone-indice").style.display = "none";


}
function precedent() {
	numeroQuestion--;
	raz();
	afficher_question();
}

function suivant() {
	numeroQuestion++;
	raz();
	afficher_question();
}

function afficher_question() {
	document.getElementById("question").textContent = questions_reponses[numeroQuestion][0];
}

function question(id) {
	document.getElementById("zone-indice").style.display = "block";
	if (id == "idfacile") {

		document.getElementById("zone-indice").textContent = questions_reponses[numeroQuestion][1][0];

	};
	if (id == "idmoyen") { document.getElementById("zone-indice").textContent = questions_reponses[numeroQuestion][1][1]; };
	if (id == "iddur") { document.getElementById("zone-indice").textContent = questions_reponses[numeroQuestion][1][2]; }

}
/* Afficher les résultats */

function resultat() {
	console.log("here");
	document.getElementById("zone-indice").textContent = questions_reponses[numeroQuestion][1][3];

}



let timeLeft; // Durée restante en secondes
let timerInterval; // Intervalle pour le décompte du minuteur
let running = false; // Statut pour savoir si le minuteur est en cours d'exécution

// Fonction pour démarrer le minuteur
function startTimer() {
	if (running) return; // Si le minuteur est déjà en cours, on ne fait rien

	const secondes = 45;
	timeLeft = secondes; // Convertir les minutes en secondes
	running = true;

	timerInterval = setInterval(function () {
		if (timeLeft <= 0) {
			clearInterval(timerInterval); // Arrêter le minuteur lorsqu'il atteint 0
			running = false;
			alert("Temps écoulé !"); // Notification de fin
		} else {
			timeLeft--; // Décrémenter une seconde
			displayTime(timeLeft); // Mettre à jour l'affichage
		}
	}, 1000); // Chaque seconde
}

// Fonction pour arrêter le minuteur
function stopTimer() {
	if (running) {
		clearInterval(timerInterval); // Arrêter le décompte
		running = false;
	}
}

// Fonction pour réinitialiser le minuteur
function resetTimer() {
	clearInterval(timerInterval); // Arrêter le décompte si en cours
	running = false;
	document.getElementById("timer").textContent = "00:00"; // Réinitialiser l'affichage
	// document.getElementById("minutes").value = 1; // Remettre la durée à 1 minute
}

// Fonction pour afficher le temps formaté (mm:ss)
function displayTime(seconds) {
	const minutes = Math.floor(seconds / 60); // Extraire les minutes
	const remainingSeconds = seconds % 60; // Extraire les secondes restantes

	// Formatage de l'affichage
	const formattedTime = `${padZero(minutes)}:${padZero(remainingSeconds)}`;
	document.getElementById("timer").textContent = formattedTime;
}

// Ajouter un zéro devant les nombres inférieurs à 10
function padZero(number) {
	return number < 10 ? '0' + number : number;
}