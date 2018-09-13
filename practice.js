/*
var canvas = document.getElementById("myCanvas"), ctx = canvas.getContext("2d");
ctx.fillStyle = "#335599";
ctx.fillRect(0, 0, 320, 500);
*/
var randed;
var pccs;
var yourcs;
function drawRock() {
    var canvas = document.getElementById("aiCanvas"), ctx = canvas.getContext("2d"), img = document.getElementById("rockimg");
    ctx.drawImage(img, 10, 10);
}

function drawScissor() {
    var canvas = document.getElementById("aiCanvas"), ctx = canvas.getContext("2d"), img = document.getElementById("scissorimg");
    ctx.drawImage(img, 10, 10);
}


function drawPaper() {
    var canvas = document.getElementById("aiCanvas"), ctx = canvas.getContext("2d"), img = document.getElementById("paperimg");
    ctx.drawImage(img, 10, 10);
}

function ai() {
    var rand = Math.floor(Math.random() * 3 + 1);
    randed = rand; 

   switch(randed) {
       case 1: drawRock(); break;
       case 2: drawScissor(); break;
       case 3: drawPaper(); break;
   }
return randed;
}

    function drawRockp() {
    var pcanvas = document.getElementById("myCanvas"), ctx = pcanvas.getContext("2d"), img = document.getElementById("rockimg");
    ctx.drawImage(img, 10, 10);
}

function drawScissorp() {
    var pcanvas = document.getElementById("myCanvas"), ctx = pcanvas.getContext("2d"), img = document.getElementById("scissorimg");
    ctx.drawImage(img, 10, 10);
}

function drawPaperp() {
    var pcanvas = document.getElementById("myCanvas"), ctx = pcanvas.getContext("2d"), img = document.getElementById("paperimg");
    ctx.drawImage(img, 10, 10);
} 
function person() {
    var personSelected = document.getElementById("person").value;

    
    switch(personSelected){
        case "Paper": drawPaperp();
            var yourShot=3; break;
        case "Rock":drawRockp();
            yourShot=1; break;
        case "Scissor":drawScissorp();yourShot=2; break;
            
    }return yourShot;
}
   
//rock= 1; scissor = 2, paper =3;

function evaluate(){
     var pc = randed, you = person();
    
    if(pc == you){ document.getElementById("eval").innerHTML=" Draw ";  }
    else if(pc == 1 && you == 2){document.getElementById("eval").innerHTML=" PC Scores ";}
    else if(pc== 1 && you == 3){document.getElementById("eval").innerHTML=" You Scores ";}
    else if(pc==2 && you ==1){document.getElementById("eval").innerHTML=" You Scores ";}
    else if(pc==2 && you==3){document.getElementById("eval").innerHTML=" PC Scores ";}
    else if(pc==3 && you==1){document.getElementById("eval").innerHTML=" PC Scores ";}
    else if(pc==3 && you==2){document.getElementById("eval").innerHTML=" You Scores ";}
}
function scoreInit(){
    var pcScore=0, yourScore=0;

        document.getElementById("yourscore").innerHTML=yourScore;
    document.getElementById("pcscore").innerHTML=pcScore;
}


function updateScore(){
    yourcs = document.getElementById("yourscore").innerHTML;
    pccs = document.getElementById("pcscore").innerHTML;
   var pc=randed, you=person();
   
   
    if  (pc==3 && you==2){document.getElementById("yourscore").innerHTML=+yourcs + +1;}else if
        (pc== 1 && you == 3){document.getElementById("yourscore").innerHTML=+yourcs + +1;}else if
        (pc==2 && you ==1){document.getElementById("yourscore").innerHTML=+yourcs + +1;}else if
        (pc==2 && you==3){ document.getElementById("pcscore").innerHTML=+pccs + +1;}else if
        (pc==3 && you==1){ document.getElementById("pcscore").innerHTML=+pccs + +1;}else if
        (pc == 1 && you == 2){ document.getElementById("pcscore").innerHTML=+pccs + +1;}

   

    if(pccs==3){document.getElementById("strike").setAttribute("class", "hide");
                document.getElementById("person").setAttribute("class", "hide");
                document.getElementById("winner").innerHTML=" Sorry you Lost"}else if(yourcs==3){document.getElementById("strike").setAttribute("class", "hide");
                 document.getElementById("person").setAttribute("class", "hide");                   
     document.getElementById("winner").innerHTML=("Congratulations !")
}
}
function start(){  
    scoreInit();
    updateScore;
    document.getElementById("strike").setAttribute("class", "show");
    document.getElementById("person").setAttribute("class", "show");
    document.getElementById("winner").innerHTML=("");
} 

function strike(){  
    ai();
    person();
    evaluate();
    updateScore(); 
}


