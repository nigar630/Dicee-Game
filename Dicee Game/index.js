var refresh = document.getElementsByClassName("btn")[0];
var img1 = document.getElementsByClassName("img1")[0];
var img2 = document.getElementsByClassName("img2")[0];

refresh.addEventListener("click", function () {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random()*6)+1;

    switch (randomNumber1) {
        case 1:
            img1.setAttribute("src", "images/dice1.png");
            break;
        case 2:
            img1.setAttribute("src", "images/dice2.png");
            break;
        case 3:
            img1.setAttribute("src", "images/dice3.png");
            break;
        case 4:
            img1.setAttribute("src", "images/dice4.png");
            break;
        case 5:
            img1.setAttribute("src", "images/dice5.png");
            break;
        case 6:
            img1.setAttribute("src", "images/dice6.png");
            break;

        default:
            img1.setAttribute("src", "images/dice6.png");
            break;
    }
     
    switch(randomNumber2){
        case 1:
            img2.setAttribute("src","images/dice1.png");
            break;
        case 2:
            img2.setAttribute("src","images/dice2.png");
            break;
            case 3:
            img2.setAttribute("src","images/dice3.png");
            break;
        case 4:
            img2.setAttribute("src","images/dice4.png");
            break;
            case 5:
            img2.setAttribute("src","images/dice5.png");
            break;
        case 6:
            img2.setAttribute("src","images/dice6.png");
            break;
            default:
                img2.setAttribute("src","images/dice6.png");
                break;
    
    }

    if(randomNumber1==randomNumber2){
        refresh.innerHTML="No one wins";
    }
    else if(randomNumber1>randomNumber2){
        refresh.innerHTML="🚩 Player 1 wins";
    }
    else{
        refresh.innerHTML="Player 2 wins 🚩";
    }


});