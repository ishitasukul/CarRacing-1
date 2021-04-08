class Form {
    constructor (){
        
    }
    display(){
        
        var title = createElement('h2');
        title.html("Car Racing  Game");
        title.position(130,10);

        var input= createInput("name");
        input.position(180,200);

        var button= createButton('play')
        button.position(250,250);

        var greeting= createElement('h2');

        button.mousePressed(function(){
            input.hide();
            button.hide();
            title.hide();

            var name = input.value();

            playerCount+=1;
            player.update(name);
            player.updateCount(playerCount);

            greeting.html("Welcome Player" + name);
            greeting.position(150,180)
        });

    }
}