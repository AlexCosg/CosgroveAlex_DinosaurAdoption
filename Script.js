var hunger = 100;
var clock1 = setInterval(depleteH, 250);
var Sleep = 100;
var clock2 = setInterval(depleteS, 250);
var Play = 100;
var clock3 = setInterval(depleteP, 250);
var gameover = 0
document.getElementById("BtnHunger").onclick = fillHunger;
document.getElementById("BtnSleep").onclick = fillSleep;
document.getElementById("BtnPlay").onclick = fillPlay;

function gameovercheck(){
    if (hunger ==0&&Sleep==0&&Play==0){
        alert("Game Over!");
        gameover ++;
        spriteHandler();
    }
    else{
        spriteHandler();
    }
}

function spriteHandler(){
    if (hunger==0&&Sleep==0&&Play==0){
        document.getElementById("Sprite").src = "Assets/Images/stegosaurdead.png"
            }
}

function fillHunger(){
    if (hunger<=99&&hunger!=0){
        hunger += 5;
    }
    else if(hunger == 0){
        hunger += 0
    }
}

function fillSleep(){
    if (Sleep<=99&&Sleep!=0){
        Sleep += 5;
    }
    else if(Sleep == 0){
        Sleep += 0
    }
}

function fillPlay(){
    if (Play<=99&&Play!=0){
        Play += 5;
    }
    else if(Play == 0){
        Play += 0
    }
}

function depleteH(){
    if (hunger == 0){
        clearInterval(clock1);
        alert("Your pet is starving!");
        gameovercheck();
    }
    else{
        hunger--;
        document.getElementById("HungerBar").value = hunger;
    }
}

function depleteS(){
    if (Sleep == 0){
        clearInterval(clock2);
        alert("Your pet is tired!");
        gameovercheck();
    }
    else{
        Sleep--;
        document.getElementById("SleepBar").value = Sleep;
    }
}

function depleteP(){
    if (Play == 0){
        clearInterval(clock3);
        alert("Your pet is Bored!");
        gameovercheck();
    }
    else{
        Play--;
        document.getElementById("PlayBar").value = Play;
    }
}