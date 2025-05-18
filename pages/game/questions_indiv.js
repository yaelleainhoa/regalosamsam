var liste_questions = [
	"0",
	"Quel est le nom de la rivière qui passse par Pampelune ?",
  "Qui a marqué un doublé contre le Fener le 11/11/2024 ?",
  "Qui est Lương Cường ?",
  "Comment s’appelle la toute première patiente de Meredith dans Grey’s Anatomy ?",
  "Qui a marqué le premier but de l'Athletic de la saison 2024-2025 de la Liga ?",
  "Qui était président du gouvernement lors de la constitution de 1978 ?",
  "De quel type de chirurgie Alex voulait-il faire sa spécialité au départ ?",
  "Où Morgane retrouve-t-elle Romain à la fin de la saison 2 ?",
  "Qui est la duchesse de Lugo ?",
  "À combien s’élève le chèque laissé par Denny Duquette à Izzie après sa mort ?",
  "Quel joueur de l'Athletic a pris un rouge lors du match contre Las Palmas cette saison ?",
  "Quel métier exerçait Morgane avant de devenir consultante pour la police de Lille ?",
  "Qui est Alexander De Croo ?",
  "Dans la saison 2 de HPI, qui est Roxane Ascher ?",
  "Quel est le métier de Paul Stadler, l’ex-mari de Jo ?",
  "Qui est l'arrière grand-père du roi de Belgique actuel ?",
  "Quel nom porte le commandant qui travaille en binôme avec Morgane ?",
  "Quel joueur porte le numéro 17 du CD Valle de Egüés ?",
  "Qui a élu président après la démission du président français qui était président en 1963 ?",
  "Qui est María Chivite ?",
	]
;


var liste_reponses = [
	"0",
	"Arga",
  "Iñaki Williams",
  "Président de l'État de la république socialiste du Viêt Nam",
  "Katie Bryce",
  "Oihan Sancet",
  "Adolfo Suárez",
  "La chirurgie plastique",
  "Au Royaumme-Uni",
  "Elena de Borbón y Grecia",
  "8,7 millions de dollars",
  "Mikel Jauregizar",
  "Femme de ménage",
  "Premier ministre de Belgique",
  "Un agent de l'IGPN",
  "Chirurgien",
  "Léopold III",
  "Adam Karadec",
  "Hasier Iriarte",
  "Georges Pompidou",
  "Présidente de la communauté forale de Navarre",
]
;

var id_reponse = 0

function myFunction(clicked_id) {
	var Elt = document.getElementById("question");
	Elt.textContent = liste_questions[clicked_id];
	document.getElementById(clicked_id).id = "id" + clicked_id;
	id_reponse = clicked_id;
	document.getElementById("reponse").textContent= "";
	console.log(clicked_id);
}
;

function Afficher_reponse(clicked_id) {
	var Elt = document.getElementById("reponse");
	Elt.textContent = liste_reponses[id_reponse];

}


var options = ["Aitatxo","Mams","Sam","Aitor","Zaz"];
var couleurs = ["#CB4483","#F6E472","#FCAE86","#604da8","#67A580",]

var startAngle = 0;
var arc = Math.PI / (options.length / 2);
var spinTimeout = null;

var spinArcStart = 10;
var spinTime = 0;
var spinTimeTotal = 0;

var ctx;

document.getElementById("spin").addEventListener("click", spin);


function drawRouletteWheel() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var outsideRadius = 200;
    var textRadius = 160;
    var insideRadius = 100;

    ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,500,500);

    ctx.strokeStyle = "white";
    ctx.lineWidth = 6;

    ctx.font = '30px "Police10"';
	ctx.fillStyle = 'white';

    for(var i = 0; i < options.length; i++) {
      var angle = startAngle + i * arc;
      

      ctx.fillStyle = couleurs[i];

      ctx.beginPath();
      ctx.arc(250, 250, outsideRadius, angle, angle + arc, false);
      ctx.arc(250, 250, insideRadius, angle + arc, angle, true);
      ctx.stroke();
      ctx.fill();

      ctx.save();
      ctx.shadowOffsetX = -1;
      ctx.shadowOffsetY = -1;
      ctx.shadowBlur    = 0;
      ctx.fillStyle = "black";
      ctx.translate(250 + Math.cos(angle + arc / 2) * textRadius, 
                    250 + Math.sin(angle + arc / 2) * textRadius);
      ctx.rotate(angle + arc / 2 + Math.PI / 2);

	   // Alignement du texte : centré horizontalement et verticalement
	   ctx.textBaseline = "middle"; // Centrer verticalement

	   
      var text = options[i];
      ctx.fillText(text, -ctx.measureText(text).width / 2, 20);
      ctx.restore();
    } 

    //Arrow
    ctx.fillStyle = "white";

    ctx.beginPath();
	
    ctx.moveTo(250 - 4, 250 - (outsideRadius + 5));
    ctx.lineTo(250 + 4, 250 - (outsideRadius + 5));
    ctx.lineTo(250 + 4, 250 - (outsideRadius - 5));
    ctx.lineTo(250 + 9, 250 - (outsideRadius - 5));
    ctx.lineTo(250 + 0, 250 - (outsideRadius - 13));
    ctx.lineTo(250 - 9, 250 - (outsideRadius - 5));
    ctx.lineTo(250 - 4, 250 - (outsideRadius - 5));
    ctx.lineTo(250 - 4, 250 - (outsideRadius + 5));
    ctx.fill();
  }
}

function spin() {
  spinAngleStart = Math.random() * 10 + 10;
  spinTime = 0;
  spinTimeTotal = Math.random() * 3 + 4 * 1000;
  rotateWheel();
}

function rotateWheel() {
  spinTime += 30;
  if(spinTime >= spinTimeTotal) {
    stopRotateWheel();
    return;
  }
  var spinAngle = spinAngleStart - easeOut(spinTime, 0, spinAngleStart, spinTimeTotal);
  startAngle += (spinAngle * Math.PI / 180);
  drawRouletteWheel();
  spinTimeout = setTimeout('rotateWheel()', 30);
}

function stopRotateWheel() {
  clearTimeout(spinTimeout);
  var degrees = startAngle * 180 / Math.PI + 90;
  var arcd = arc * 180 / Math.PI;
  var index = Math.floor((360 - degrees % 360) / arcd);
  ctx.save();
  ctx.font = 'bold 30px "police10"';
  var text = options[index]
  ctx.fillText(text, 250 - ctx.measureText(text).width / 2, 250 + 10);
  ctx.restore();
}

function easeOut(t, b, c, d) {
  var ts = (t/=d)*t;
  var tc = ts*t;
  return b+c*(tc + -3*ts + 3*t);
}

drawRouletteWheel();