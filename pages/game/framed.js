

manches = []
let manchesNb = 13
for(let i =0; i<manchesNb; i++)
{
	let currentManche = [];
	for(let j = 0; j < 4; j++)
	{
		currentManche.push("../../assets/img/framed/manche"+String(i+1)+"-indice"+String(j+1)+".png")
	}
	manches.push(currentManche)
}


var mancheActuelle = 0

for(let i = 0; i < manchesNb ; i++)
	{
		this.document.getElementById("manche-select").innerHTML += '<option value='+i + '> Manche ' + String(i+1) + "</option>"
	}

document.getElementById("manche-select").addEventListener 
("change", function() 
	{
	var selectedValue = document.getElementById("manche-select").value;
	console.log(selectedValue)
	console.log("selected : "+selectedValue)
	mancheActuelle = selectedValue 
	// if (selectedValue==12) {
	// 	document.getElementById("image").setAttribute("src", "../../assets/img/framed/rules.jpg");	}

	// if (selectedValue!=12) {
	// 	console.log("here");
	document.getElementById("image-framed").setAttribute("src", manches[mancheActuelle][0]) ;
	// }
	
	}
)

function Afficher_image(id) {
	var imgIndex = id-1

	document.getElementById("image-framed").setAttribute("src", manches[mancheActuelle][imgIndex]) ;

	// if(mancheActuelle!=12)
	// {
	// 	document.getElementById("image").setAttribute("src", manches[mancheActuelle][imgIndex]) ;
	// }

	// else {
		
	// 	document.getElementById("image").setAttribute("src", "../../assets/img/framed/rules.jpg") ;
	
	// }
}

