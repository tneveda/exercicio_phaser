class GameOver extends Phaser.Scene{

    constructor(){
        super( {key: 'GameOver'});
}

preload() { }

create() {

    var bg = this.add.sprite(0,0,'badPlanet');
    bg.setOrigin(0,0);

    
    
    this.enter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
  
    

    var text= this.add.text(225, 200, 'Game Over', {fontSize: '40px', fill: '#FFFFFF' })
    var text= this.add.text(270, 400, 'Enter', {fontSize: '30px', fill: '#FFFFFF' })
    var text= this.add.text(125, 450, 'Para voltar ao Inicio', {fontSize: '30px', fill: '#FFFFFF' })
}

update(){
    if(this.enter.isDown){
        this.iniciaJogo();
    }
}

iniciaJogo(){
    this.scene.start('StartScene');
}

}