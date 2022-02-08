var bg;

var gamestate = 0;
var pcount;
var database;

var forms,game,player;

var distance = 0;
var allPlayers;

function setup(){

    database = firebase.database();

    createCanvas(400,400);

    game = new Game();
    game.getState();
    game.start();
    
    


}

function draw(){
    background("white");

   

    if(pcount === 4){

        game.update(1);

    }

    if (gamestate === 1){

        clear();
        game.play();
    }
   
}


