class ResultadosFinais extends Phaser.Scene{

    constructor(){
        super( {key: 'ResultadosFinais'});
}

preload() { }

create(score) {

    var bg = this.add.sprite(-535,0,'mapa');
    bg.setOrigin(0,0);

    
    
    this.enter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
  
    
    var text= this.add.text(120, 250, "Parabéns! Atingiu o objetivo com " +  score + " pontos", { fill: '#12EFE8' })
    var text= this.add.text(150, 400, 'Pressiona Enter para voltar ao inicio', { fill: '#12EFE8' })
   
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