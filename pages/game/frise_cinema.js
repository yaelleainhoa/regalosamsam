
tableau_reponse = ["Lee",
			"Sasuke",
			"Naruto",
			"Sakura",
			"Chiyo",
			'Gaara',
			'Kimimaro',
			"Orochimaru",
			'Itachi',
			'Shisui',
			'Danzo',
			'Hiruzen',
			'Tobirama',
			'Hasirama',
			'Tsunade',
			'Kakashi',
			'Gai'
]

for (let i = 0; i < tableau_reponse.length; i++)
{
	const tr = document.createElement('div'); 
	tr.classList.add("line");
	const tdNumero = document.createElement('div'); 
	tdNumero.classList.add("cell");
	const tdNom = document.createElement('input');
	tdNom.classList.add("cell");

	tdNumero.textContent = i+1; 
	tdNom.addEventListener('keydown', (event) => {
		if (event.key === 'Enter' && tdNom.value.toLowerCase() == tableau_reponse[i].toLowerCase()) {
			tdNumero.textContent = tableau_reponse[i];
			tdNumero.style.backgroundColor = "#C6E5BA";
		}
	});

	if (i==21)  {tdNumero.textContent="GOAT"}

	tr.appendChild(tdNumero); 
	tr.appendChild(tdNom); 

	document.getElementById('answers_tab').appendChild(tr); 
};

document.getElementById('image').addEventListener("click", function() {
	if (this.requestFullscreen) {
	  this.requestFullscreen();
	} else if (this.msRequestFullscreen) {
	  this.msRequestFullscreen();
	} else if (this.mozRequestFullScreen) {
	  this.mozRequestFullScreen();
	} else if (this.webkitRequestFullscreen) {
	  this.webkitRequestFullscreen();
	}
  });

function Valider() {
	document.getElementById('image').src = "../../assets/img/cinema/solution.png" 
}