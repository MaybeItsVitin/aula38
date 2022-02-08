class Player {

    constructor(){

        this.index = null;
        this.distance = 0;
        this.name = null;
    }

    getCount(){

        var playercountref = database.ref("pcount");
        playercountref.on("value",(data)=>{

            pcount = data.val();

        })

    }

    updateCount(count){

        database.ref("/").update({pcount : count});
    
    }

    update(){

        var playerindex = "players/player"+this.index;
        database.ref(playerindex).set({
            Name : this.name,
            distance : this.distance})

    }

    static getPlayerinf(){
        var playerinforef = database.ref("players");
        playerinforef.on("value",(data)=>{
            allPlayers = data.val();
        }) 
    }
}