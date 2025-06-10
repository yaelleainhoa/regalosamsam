// to launch locally
// import { games } from "../../assets/variables.js";
// To change for githubpages

console.log('here');

// import { games } from "/../../assets/variables.js";
import { games } from "/regalosamsam/assets/variables.js";

function setGames()
{
    var gamesLayout = document.createElement("div");
    gamesLayout.classList.add("gamesLayout");

    for(let i = 0; i < games.length; i++)
    {
        console.log(i);
        var jeu = document.createElement("div");
        jeu.classList.add("jeu");

        var gameImgNb = i%7;
        jeu.style.backgroundImage = "url('assets/img/game"+gameImgNb+".png')"

        var title = document.createElement("h1");
        title.innerHTML = "Jeu "+(i+1).toString();
        jeu.appendChild(title);

        var gameButton = document.createElement("button");
        gameButton.classList.add("gameBtn");
        gameButton.onclick = function() {
            const page = games[i][0];
            const index = i;
            window.location.href = `pages/page/${page}.html?pageIndex=${index}`;
        };
        jeu.appendChild(gameButton);

        var gameSpan = document.createElement("span");
        gameSpan.innerHTML = games[i][1];
        gameButton.appendChild(gameSpan);

        gamesLayout.appendChild(jeu);
    }


document.getElementById("home").appendChild(gamesLayout);
}

setGames();

