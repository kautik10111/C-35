class Form{
    constructor(){
    
    }
    display(){
        var title = createElement ('h2');
        title.html("car racing game");
        title.position(130,0);
        var input = createInput("name");
        var button = createButton('play');
        input.position(130,60);
        button.position(200,200);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            input.value();
            button.value();
        });
    }
}