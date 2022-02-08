class Forms {

    constructor(){

        this.input = createInput("Name");
        this.button = createButton("Play");
        this.greeting = createElement('h3')
    }

    display(){

        var title = createElement("h2");
        title.html("Race do Vitão");
        title.position(130,0);

        
        this.input.position(130,160);

        this.button.position(250,200);
        this.button.mousePressed(()=>{

            player.name = this.input.value();

            this.greeting.html("Ooba "+player.name+", bão?");
            this.greeting.position(130,160);

            this.button.hide();
            this.input.hide();

            pcount += 1;
            player.index = pcount;

            player.update();
            player.updateCount(pcount);
     
        })


        
    }

    hide(){

        this.greeting.hide();
        this.input.hide();
        this.button.hide();
    }
    
}