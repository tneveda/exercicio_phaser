class InstructionsPart3Scene extends Phaser.Scene {


    constructor() {
        super({ key: 'InstructionsPart3Scene' });
    }


    preload(){}

    create(){

      

        this.enter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
        

        this.lixo = this.physics.add.sprite(40, 150, 'lixo2', 6);
        this.lixo = this.physics.add.sprite(40, 200, 'lixo3', 6);
        this.lixo = this.physics.add.sprite(70, 200, 'lixo4', 6);
        this.lixo = this.physics.add.sprite(40, 250, 'predador1', 6);
        this.lixo = this.physics.add.sprite(100, 250, 'predador2', 6);
        this.lixo = this.physics.add.sprite(140, 250, 'predador3', 6);
        
        
        var text1= this.add.text(45, 60, 'Termina o jogo atingindo a superficie ', { fill: '#12EFE8' });
        var text2= this.add.text(45, 90, 'dentro do tempo limite, e com a maior pontuação possivel', { fill: '#12EFE8' });
        var text3= this.add.text(60, 150, 'Vale 150 Pontos', { fill: '#12EFE8' });
        var text3= this.add.text(90, 200, 'Entre outros residuos que valem 50 pontos', { fill: '#12EFE8' });
        var text4= this.add.text(170,250, 'Predadores (todos os outros são inofensivos)', { fill: '#12EFE8' });
        var text5= this.add.text(260, 430, 'Pressiona Enter para continuar!', { fill: '#12EFE8' })
       
    }

    update(){
        if(this.enter.isDown){
            this.startGame();
        }
    }

    startGame(){
        this.scene.start("StartScene");
    }





}