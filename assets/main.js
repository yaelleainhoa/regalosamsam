// to launch locally
// import { games } from "../../assets/variables.js";
// to change for githubpages
import { games } from "/../../assets/variables.js";

function getCurrentPageIndex() {
    console.log('here');
    const currentPage = window.location.href;
    let matches = currentPage.match(/\d+/g);
    let number = matches[matches.length-1];
    return parseInt(number,10);
}

const currentGameIndex = getCurrentPageIndex();

const prevGameIndex = (currentGameIndex - 1)%games.length;
const nextGameIndex = (currentGameIndex + 1)%games.length;


function navigateToGame(index) {
    if (index >= 0 && index < games.length) {
        console.log(index);
        const game = games[index][0];
        window.location.href = `./${game}.html?gameIndex=${index}`;
    }
}

function setCommonHeader()
{
    var link1 = document.createElement("link");
    link1.rel = "stylesheet";
    link1.href = "../../assets/base.css";

    var link2 = document.createElement("link");
    link2.rel = "stylesheet";
    link2.href = "../../assets/main.css";

    var link3 = document.createElement("link");
    link3.rel = "icon";
    link3.type = "image/gif";
    link3.href = "../../assets/img/play.png";

    document.head.appendChild(link1);
    document.head.appendChild(link2);
    document.head.appendChild(link3);
}

function setNavBar()
{
    var nav = document.createElement("nav");
    nav.classList.add("navigationBar");

    var leftButton = document.createElement("button");
    leftButton.onclick = function()
    {
        navigateToGame(prevGameIndex);
    }
    var leftButtonImg = document.createElement("img");
    leftButtonImg.src = "../../assets/img/left-arrow.png";
    leftButtonImg.style.width = "10%";
    leftButtonImg.classList.add("navigationButton");
    leftButton.appendChild(leftButtonImg);
    nav.appendChild(leftButton);
    
    var homeButton = document.createElement("button");
    homeButton.onclick = function()
    {
        window.location.href='../../';
    }
    var homeButtonImg = document.createElement("img");
    homeButtonImg.src = "../../assets/img/home.png";
    homeButtonImg.style.width = "10%";
    homeButtonImg.classList.add("navigationButton");
    homeButton.appendChild(homeButtonImg);
    nav.appendChild(homeButton);

    var rightButton = document.createElement("button");
    rightButton.onclick = function()
    {
        navigateToGame(nextGameIndex)
    }
    var rightButtonImg = document.createElement("img");
    rightButtonImg.src = "../../assets/img/right-arrow.png";
    rightButtonImg.style.width = "10%";
    rightButtonImg.classList.add("navigationButton");
    rightButton.appendChild(rightButtonImg);
    nav.appendChild(rightButton);

    document.body.prepend(nav);
}

setCommonHeader();
setNavBar();