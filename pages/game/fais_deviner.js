// Définition des manches 
    manches = [
        "Choisir la manche",
        "Retrouver les drapeaux",
        "Retrouver les personnages de Murder",
        "Retrouver les métiers de Friends",
    ]

// Définition des images de fond
    sourceImage = 
    [
        "../../assets/img/letsplay.png",
        "../../assets/img/drapeau/manche0.png",
        "../../assets/img/drapeau/manche1.png",
        "../../assets/img/drapeau/manche2.png",
    ]

// Définition des manches  
    let manchesNb = manches.length ;
    var mancheActuelle = 0

// Définition de la liste des manches
    for(let i = 0; i < manchesNb ; i++)
        {
            if (i==0) {this.document.getElementById("manche-select").innerHTML += '<option value='+i + '> Manches ' + "</option>"}
            else {this.document.getElementById("manche-select").innerHTML += '<option value='+i + '> Manche ' + i + "</option>"}
        }

 // Sélection des manches       
    document.getElementById("manche-select").addEventListener 
    ("change", function() 
        {
            // document.getElementsByClassName('drop-zone').innerHTML = '';

            // Récupération de la valeur de la manche
                var selectedValue = document.getElementById("manche-select").value;
                mancheActuelle = selectedValue 
            
            // Remise à zéro des zones de dépôt et des images à drag&drop
                const dropZones = document.querySelectorAll('.drop-zone');
                dropZones.forEach(dropZone => {
                    dropZone.remove(); // Supprime chaque élément du DOM
                });

                const images_manche = document.querySelectorAll('.draggable');
                images_manche.forEach((drapeau, index) => {
                        drapeau.remove(); // Supprime chaque élément du DOM
                    });
                 
                const_propositions = []    

                if (mancheActuelle == 1) {var nbImages = zones_1 - 1}
                else if (mancheActuelle == 2) {var nbImages = zones_2- 1}
                else if (mancheActuelle == 3) {var nbImages = zones_3- 1}; 
                for (i = 0; i < nbImages ; i++)
                        {const_propositions[i] = i}

            // Affichage de l'image liée à la manche
                image.src = sourceImage[mancheActuelle];

            // Affichage des zones et des images
                dessinerZone();
                afficherImages();
        
        }
    )


// Création du contenu principal
    const container = document.createElement('div');
    container.id = 'container';
    container.style.position = "relative";
    container.style.display = "inline-block";
    socle.appendChild(container);

// Création et ajout de l'image
    const image = document.createElement('img');
    image.src = "../../assets/img/letsplay.png";
    image.alt = 'Image';
    image.id = 'image'; 
    container.appendChild(image);

// Définir les zones de drop avec leurs positions
const zones_1 = [
    { id: '0', top: '76px', left: '25px', height: '48px', width: '60px', border: '2px dashed black', borderRadius:'10%' },
    { id: '1', top: '70px', left: '145px', height: '48px', width: '60px', border: '2px dashed black', borderRadius:'10%' },
    { id: '2', top: '68px', left: '265px', height: '48px', width: '60px', border: '2px dashed black', borderRadius:'10%' },
    { id: '3', top: '69px', left: '371px', height: '48px', width: '60px', border: '2px dashed black', borderRadius:'10%' },
    { id: '4', top: '96px', left: '483px', height: '48px', width: '60px', border: '2px dashed black', borderRadius:'10%' },
    { id: '5', top: '173px', left: '579px', height: '48px', width: '60px', border: '2px dashed black', borderRadius:'10%' },
    { id: '6', top: '270px', left: '578px', height: '48px', width: '60px', border: '2px dashed black', borderRadius:'10%' },
    { id: '7', top: '371px', left: '578px', height: '48px', width: '60px', border: '2px dashed black', borderRadius:'10%' },
    { id: '8', top: '435px', left: '470px', height: '48px', width: '60px', border: '2px dashed black', borderRadius:'10%' },
    { id: '9', top: '399px', left: '371px', height: '48px', width: '60px', border: '2px dashed black', borderRadius:'10%' },
    { id: '10', top: '398px', left: '249px', height: '48px', width: '60px', border: '2px dashed black', borderRadius:'10%' },
    { id: '11', top: '388px', left: '67px', height: '48px', width: '60px', border: '2px dashed black', borderRadius:'10%' },
    { id: '12', top: '284px', left: '40px', height: '48px', width: '60px', border: '2px dashed black', borderRadius:'10%' },
    { id: '13', top: '10px', left: '580px', height: '48px', width: '60px', border: '2px dashed black', borderRadius:'10%' },
];


const zones_2 = [
    { id: '0', top: '65px', left: '62px', height: '48px', width: '60px', border: '2px dashed white', borderRadius:'50%' },
    { id: '1', top: '127px', left: '14px', height: '48px', width: '60px', border: '2px dashed white', borderRadius:'50%' },
    { id: '2', top: '189px', left: '61px', height: '48px', width: '60px', border: '2px dashed white', borderRadius:'50%' },
    { id: '3', top: '251px', left: '14px', height: '48px', width: '60px', border: '2px dashed white', borderRadius:'50%' },
    { id: '4', top: '313px', left: '62px', height: '48px', width: '60px', border: '2px dashed white', borderRadius:'50%' },
    { id: '5', top: '373px', left: '14px', height: '48px', width: '60px', border: '2px dashed white', borderRadius:'50%' },
    { id: '6', top: '437px', left: '62px', height: '48px', width: '60px', border: '2px dashed white', borderRadius:'50%' },
    { id: '7', top: '21px', left: '289px', height: '48px', width: '60px', border: '2px dashed white', borderRadius:'50%' },
    { id: '8', top: '95px', left: '290px', height: '48px', width: '60px', border: '2px dashed white', borderRadius:'50%' },
    { id: '9', top: '157px', left: '323px', height: '48px', width: '60px', border: '2px dashed white', borderRadius:'50%' },
    { id: '10', top: '228px', left: '260px', height: '48px', width: '60px', border: '2px dashed white', borderRadius:'50%' },
    { id: '11', top: '293px', left: '301px', height: '48px', width: '60px', border: '2px dashed white', borderRadius:'50%' },
    { id: '12', top: '362px', left: '247px', height: '48px', width: '60px', border: '2px dashed white', borderRadius:'50%' },
    { id: '13', top: '421px', left: '294px', height: '48px', width: '60px', border: '2px dashed white', borderRadius:'50%' },
    { id: '14', top: '29px', left: '487px', height: '48px', width: '60px', border: '2px dashed white', borderRadius:'50%' },
    { id: '15', top: '123px', left: '491px', height: '48px', width: '60px', border: '2px dashed white', borderRadius:'50%' },
    { id: '16', top: '199px', left: '521px', height: '48px', width: '60px', border: '2px dashed white', borderRadius:'50%' },
    { id: '17', top: '278px', left: '499px', height: '48px', width: '60px', border: '2px dashed white', borderRadius:'50%' },
    { id: '18', top: '347px', left: '513px', height: '48px', width: '60px', border: '2px dashed white', borderRadius:'50%' },
    { id: '19', top: '415px', left: '500px', height: '48px', width: '60px', border: '2px dashed white', borderRadius:'50%' },
    { id: '20', top: '20px', left: '10px', height: '48px', width: '60px', border: '2px dashed red', borderRadius:'50%' },

];

const zones_3 = [
    { id: '0', top: '16px', left: '26px', height: '49px', width: '46px', border: '3px dashed yellow', borderRadius:'10%' },
    { id: '1', top: '16px', left: '120px', height: '49px', width: '46px', border: '3px dashed yellow', borderRadius:'10%' },
    { id: '2', top: '16px', left: '213px', height: '49px', width: '46px', border: '3px dashed yellow', borderRadius:'10%' },
    { id: '3', top: '16px', left: '615px', height: '49px', width: '46px', border: '3px dashed yellow', borderRadius:'10%' },
    { id: '4', top: '16px', left: '718px', height: '49px', width: '46px', border: '3px dashed yellow', borderRadius:'10%' },
    { id: '5', top: '16px', left: '818px', height: '49px', width: '46px', border: '3px dashed yellow', borderRadius:'10%' },
    { id: '6', top: '127px', left: '26px', height: '49px', width: '46px', border: '3px dashed yellow', borderRadius:'10%' },
    { id: '7', top: '127px', left: '124px', height: '49px', width: '46px', border: '3px dashed yellow', borderRadius:'10%' },
    { id: '8', top: '127px', left: '224px', height: '49px', width: '46px', border: '3px dashed yellow', borderRadius:'10%' },
    { id: '9', top: '127px', left: '322px', height: '49px', width: '46px', border: '3px dashed yellow', borderRadius:'10%' },
    { id: '10', top: '127px', left: '421px', height: '49px', width: '46px', border: '3px dashed yellow', borderRadius:'10%' },
    { id: '11', top: '127px', left: '521px', height: '49px', width: '46px', border: '3px dashed yellow', borderRadius:'10%' },
    { id: '12', top: '127px', left: '619px', height: '49px', width: '46px', border: '3px dashed yellow', borderRadius:'10%' },
    { id: '13', top: '127px', left: '718px', height: '49px', width: '46px', border: '3px dashed yellow', borderRadius:'10%' },
    { id: '14', top: '127px', left: '818px', height: '49px', width: '46px', border: '3px dashed yellow', borderRadius:'10%' },
    { id: '15', top: '244px', left: '24px', height: '49px', width: '46px', border: '3px dashed yellow', borderRadius:'10%' },
    { id: '16', top: '244px', left: '124px', height: '49px', width: '46px', border: '3px dashed yellow', borderRadius:'10%' },
    { id: '17', top: '244px', left: '221px', height: '49px', width: '46px', border: '3px dashed yellow', borderRadius:'10%' },
    { id: '18', top: '244px', left: '321px', height: '49px', width: '46px', border: '3px dashed yellow', borderRadius:'10%' },
    { id: '19', top: '244px', left: '419px', height: '49px', width: '46px', border: '3px dashed yellow', borderRadius:'10%' },
    { id: '20', top: '244px', left: '520px', height: '49px', width: '46px', border: '3px dashed yellow', borderRadius:'10%' },  
    { id: '21', top: '244px', left: '617px', height: '49px', width: '46px', border: '3px dashed yellow', borderRadius:'10%' },
    { id: '22', top: '244px', left: '718px', height: '49px', width: '46px', border: '3px dashed yellow', borderRadius:'10%' },
    { id: '23', top: '244px', left: '815px', height: '49px', width: '46px', border: '3px dashed yellow', borderRadius:'10%' },
    { id: '24', top: '377px', left: '31px', height: '49px', width: '46px', border: '3px dashed yellow', borderRadius:'10%' },
    { id: '25', top: '377px', left: '131px', height: '49px', width: '46px', border: '3px dashed yellow', borderRadius:'10%' },
    { id: '26', top: '377px', left: '236px', height: '49px', width: '46px', border: '3px dashed yellow', borderRadius:'10%' },
    { id: '27', top: '377px', left: '368px', height: '49px', width: '46px', border: '3px dashed yellow', borderRadius:'10%' },
    { id: '28', top: '377px', left: '495px', height: '49px', width: '46px', border: '3px dashed yellow', borderRadius:'10%' },
    { id: '29', top: '377px', left: '594px', height: '49px', width: '46px', border: '3px dashed yellow', borderRadius:'10%' },
    { id: '30', top: '377px', left: '701px', height: '49px', width: '46px', border: '3px dashed yellow', borderRadius:'10%' },
    { id: '31', top: '377px', left: '815px', height: '49px', width: '46px', border: '3px dashed yellow', borderRadius:'10%' },
    { id: '32', top: '57px', left: '498px', height: '49px', width: '46px', border: '3px dashed black', borderRadius:'10%' },
];

const images_1 = [
    "../../assets/img/drapeau/barhain.png",
    "../../assets/img/drapeau/bermuda.png",
    "../../assets/img/drapeau/burundi.png",
    "../../assets/img/drapeau/dominica.png",
    "../../assets/img/drapeau/kiribati.png",
    "../../assets/img/drapeau/malawi.png",
    "../../assets/img/drapeau/micronesia.png",
    "../../assets/img/drapeau/oman.png",
    "../../assets/img/drapeau/suriname.png",
    "../../assets/img/drapeau/swaziland.png",
    "../../assets/img/drapeau/timor.png",
    "../../assets/img/drapeau/turkmenistan.png",
    "../../assets/img/drapeau/tuvalu.png",
];

const images_2 = [
    "../../assets/img/drapeau/allemagne.png",
    "../../assets/img/drapeau/arabie.png",
    "../../assets/img/drapeau/armenie.png",
    "../../assets/img/drapeau/birmanie.png",
    "../../assets/img/drapeau/catalogne.png",
    "../../assets/img/drapeau/chine.png",
    "../../assets/img/drapeau/eh.png",
    "../../assets/img/drapeau/galice.png",
    "../../assets/img/drapeau/galles.png",
    "../../assets/img/drapeau/georgie.png",
    "../../assets/img/drapeau/iran.png",
    "../../assets/img/drapeau/irlande.png",
    "../../assets/img/drapeau/italie.png",
    "../../assets/img/drapeau/japon.png",
    "../../assets/img/drapeau/laos.png",
    "../../assets/img/drapeau/norvege.png",
    "../../assets/img/drapeau/pologne.png",
    "../../assets/img/drapeau/portugal.png",
    "../../assets/img/drapeau/thai.png",
    "../../assets/img/drapeau/vietnam.png",

];

const images_3 = [
    "../../assets/img/drapeau/vv.png",
    "../../assets/img/drapeau/dama.png",
    "../../assets/img/drapeau/dede.png",
    "../../assets/img/drapeau/caoi.png",
    "../../assets/img/drapeau/bbb.png",
    "../../assets/img/drapeau/kkkkk.png",
    "../../assets/img/drapeau/bbaa.png",
    "../../assets/img/drapeau/aa.png",
    "../../assets/img/drapeau/ll.png",
    "../../assets/img/drapeau/nn.png",
    "../../assets/img/drapeau/zz.png",
    "../../assets/img/drapeau/cccc.png",
    "../../assets/img/drapeau/dadada.png",
    "../../assets/img/drapeau/aaaa.png",
    "../../assets/img/drapeau/pp.png",
    "../../assets/img/drapeau/dldl.png",
    "../../assets/img/drapeau/ksoa.png",
    "../../assets/img/drapeau/kqkq.png",
    "../../assets/img/drapeau/lqlq.png",
    "../../assets/img/drapeau/mmmm.png",
    "../../assets/img/drapeau/tt.png",
    "../../assets/img/drapeau/kankda.png",
    "../../assets/img/drapeau/oo.png",
    "../../assets/img/drapeau/jjjj.png",
    "../../assets/img/drapeau/damq.png",
    "../../assets/img/drapeau/nbjh.png",
    "../../assets/img/drapeau/jjaaj.png",
    "../../assets/img/drapeau/lala.png",
    "../../assets/img/drapeau/dadama.png",
    "../../assets/img/drapeau/kkkk.png",
    "../../assets/img/drapeau/dada.png",
    "../../assets/img/drapeau/xx.png",
    

];


const_reponses = []

const_reponses_1 =[
    "dominica",
    "bermuda",
    "barhain",
    "turkmenistan",
    "oman",
    "micronesia",
    "timor",
    "tuvalu",
    "burundi",
    "swaziland",
    "malawi",
    "suriname",
    "kiribati"

];

const_reponses_2 =[
    "armenie",
    "galles",
    "japon",
    "galice",
    "laos",
    "italie",
    "chine",
    "catalogne",
    "norvege",
    "eh",
    "iran",
    "thai",
    "birmanie",
    "vietnam",
    "irlande",
    "pologne",
    "georgie",
    "portugal",
    "arabie",
    "allemagne"



];

const_reponses_3 = [
    "aaaa",
    "xx",
    "nbjh",
    "kankda",
    "ksoa",
    "mmmm",
    "jjjj",
    "kkkk",
    "lqlq",
    "cccc",
    "bbaa",
    "dada",
    "kqkq",
    "bbb",
    "dede",
    "dadada",
    "dama",
    "lala",
    "kkkkk",
    "jjaaj",
    "dldl",
    "caoi",
    "pp",
    "nn",
    "oo",
    "dadama",
    "vv",
    "damq",
    "tt",
    "zz",
    "aa",
    "ll"

]


const_propositions = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13"

]

// Création et ajout des zones de drop
    function dessinerZone () {
        // Récupération des zones à dessiner en fonction de la manche
            var zones_manche = [];
            if (mancheActuelle ==1) {zones_manche = zones_1}
            else if (mancheActuelle==2) {zones_manche = zones_2}
            else if (mancheActuelle==3) {zones_manche = zones_3}
            zones_manche.forEach(zone => {
                const dropZone = document.createElement('div');
                dropZone.className = 'drop-zone';
                dropZone.id = zone.id;
                dropZone.style.position = 'absolute'; // Nécessaire pour positionner avec top/left
                dropZone.style.top = zone.top;
                dropZone.style.left = zone.left;
                dropZone.style.width = zone.width; // Largeur de la zone de drop
                dropZone.style.height = zone.height; // Hauteur de la zone de drop
                dropZone.style.border = zone.border; // Style de la bordure
                dropZone.style.opacity = '0.5'; // Opacité pour la visibilité
                dropZone.style.borderRadius = zone.borderRadius;
            

            // Événements pour la zone de drop
            dropZone.addEventListener('dragover', (event) => {
                event.preventDefault(); // Autoriser le drop
            });

            dropZone.addEventListener('drop', (event,index) => {
                event.preventDefault(); // Prévenir le comportement par défaut

                const id = event.dataTransfer.getData('text/plain'); // Récupérer l'id de l'image
                const draggedElement = document.getElementById(id);

                // Obtenir les coordonnées de la zone de drop
                const dropZoneRect = dropZone.getBoundingClientRect();

                // Déplacer l'image à la position de la zone de drop
                draggedElement.style.position = 'absolute';
                const offsetX = -10;
                const offsetY = -10;
                draggedElement.style.top = `${dropZoneRect.top + window.scrollY + offsetY}px`;
                draggedElement.style.left = `${dropZoneRect.left + window.scrollX + offsetX}px`;

                const_propositions[dropZone.id]=id;
            
            });

            container.appendChild(dropZone);
        });
    }

// Création du contenu principal
    const container_drapeaux = document.createElement('div');
    container_drapeaux.id = 'container_drapeaux';
    // container_drapeaux.style.position = "relative";
    // container_drapeaux.style.display = "inline-block";
    container_drapeaux.style.flexWrap = "wrap"; // Permet de passer à la ligne si nécessaire
    container_drapeaux.style.justifyContent = "center"; // Centrer horizontalement
    container_drapeaux.style.alignItems = "center"; // Centrer verticalement (optionnel)
    container_drapeaux.style.margin = "20px"; // Ajouter un espacement autour


    var images_manche = [];
   


// Création et ajout des zones de drapeaux
    function afficherImages() {
        if (mancheActuelle ==1) {images_manche = images_1}
        else if (mancheActuelle==2) {images_manche = images_2}
        else if (mancheActuelle==3) {images_manche = images_3}
    
    images_manche.forEach((drapeau, index) => {
    const drapeauZone = document.createElement('img');
    drapeauZone.className = 'draggable';
    drapeauZone.id = images_manche[index].split('/').pop().split('.')[0];
    drapeauZone.src = images_manche[index];
   
    if (mancheActuelle ==1) {
        drapeauZone.style.width = '60px'; // Largeur de la zone de drop
        drapeauZone.style.height = '48px'; // Hauteur de la zone de drop
        drapeauZone.style.borderRadius = '10px'; 
    }
    else if (mancheActuelle==2) {
        drapeauZone.style.width = '72px'; // Largeur de la zone de drop
        drapeauZone.style.height = 'auto'; // Hauteur de la zone de drop
        drapeauZone.style.maxHeight = '90px';
        drapeauZone.style.borderRadius = '30px'; 
    }

    else if (mancheActuelle==3) {
        drapeauZone.style.width = '75px'; // Largeur de la zone de drop
        drapeauZone.style.height = 'auto'; // Hauteur de la zone de drop
        drapeauZone.style.maxHeight = '90px';
        drapeauZone.style.borderRadius = '50px'; 
    }
    
    drapeauZone.style.margin = '10px'; 
    container_drapeaux.appendChild(drapeauZone);

    

    // Événement pour le drag
    drapeauZone.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text/plain', event.target.id); // Stocker l'id de l'image
    });
    

    container_drapeaux.appendChild(drapeauZone);

});
     


socle.appendChild(container_drapeaux);
    }

    function reponse() {
        var score = 0;
        if (mancheActuelle ==1) {const_reponses = const_reponses_1}
        else if (mancheActuelle ==2) {const_reponses = const_reponses_2}
        else if (mancheActuelle ==3) {const_reponses = const_reponses_3}
        for (i = 0; i< const_propositions.length; i++) {   
            var constATester = const_propositions[i].replace(/\d/g, '');
            if (constATester == const_reponses[i]) {
                score = score + 1;
                document.getElementById(const_propositions[i]).style.opacity = "0.9";
                document.getElementById(const_propositions[i]).style.border = "10px solid #28a745";
                document.getElementById(const_propositions[i]).style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
                
            }

            else {

            }

            
        }


         if (score == const_reponses.length) {alert("Gagné !"); console.log(score)}
            else {alert("Perdu !");; console.log(score)
            }

    }

// Récupération des coordonnées
image.addEventListener('click', function(event) {
    // Récupère la position de l'image par rapport à la fenêtre
    const rect = image.getBoundingClientRect();
    
    // Coordonnées du clic par rapport à la fenêtre
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Coordonnées du clic par rapport à l'image
    const relativeX = mouseX - rect.left ; // Position X par rapport à l'image
    const relativeY = mouseY - rect.top ;  // Position Y par rapport à l'image

    // Affichage des coordonnées dans la console
    console.log(`Coordonnée X: ${relativeX}, Coordonnée Y: ${relativeY}`);
});







