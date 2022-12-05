class InstructionsScene extends Phaser.Scene {


    constructor() {
        super({ key: 'InstructionsScene' });
    }


    preload(){}

    create(){

      

        this.enter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
      
        
        var text1= this.add.text(180, 40, 'Bem vindo ao Clean the Ocean', { fill: '#12EFE8' });
        var text2= this.add.text(40, 130, 'O Consumismo em excesso e falta de Politicas Globais ', { fill: '#12EFE8' });
        var text3= this.add.text(45, 160, 'em nome do Ambiente e Sustentatibilidade têm sido ', { fill: '#12EFE8' });
        var text4= this.add.text(45, 190, 'prejudiciais ao nosso planeta. Os Oceanos são uma ', { fill: '#12EFE8' });
        var text5= this.add.text(45, 220, 'das principais vitimas, com invasão de residuos ', { fill: '#12EFE8' });
        var text6= this.add.text(45, 250, 'que têm destruido a fauna maritima, além de  ', { fill: '##12EFE8' });
        var text7= this.add.text(45, 280, 'ser altamente prejudicial ao Ser Humano. ', { fill: '#12EFE8' });
        var text8= this.add.text(260, 400, 'Pressiona Enter para continuar!', { fill: '#12EFE8' })
       
    }

    update(){
        if(this.enter.isDown){
            this.startGame();
        }
    }

    startGame(){
        this.scene.start("InstructionsPart2Scene");
    }





}