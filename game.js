class Game {

   constructor(){}

   getState(){

    var gamestateref = database.ref("gamestate");

    gamestateref.on("value",function(data){

        gamestate = data.val();

    })
   }

   update(state){

    database.ref("/").update({

        gamestate : state
    })
   }

   async start(){

    if (gamestate === 0 ){

        player = new Player();
        var playerCountref = await database.ref("pcount").once("value");
        if (playerCountref.exists()){

            pcount = playerCountref.val();
            player.getCount();
        }
        
        forms = new Forms();
        forms.display();
    }
   }

   play(){

    forms.hide();

    textSize(30);
    text("começô o rachinha",120,100);

    Player.getPlayerinf();

    if(allPlayers !== undefined){

        var displaypos = 130;
        
        
        for(var plr in allPlayers){

            if(plr === "player"+ player.index){

                fill("red");

            }

            else {

                displaypos += 20;

                fill('black');
                textSize(15);
                text(allPlayers[plr].name + ":" +allPlayers[plr].distance,120,displaypos);
            }
        }

        
        
        


    
    }

    if (keyIsDown(UP_ARROW)&& player.index !== null){

        player.distance += 50;
        player.update();
    }
   }

   
   

}