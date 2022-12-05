class InstructionsPart2Scene extends Phaser.Scene {


    constructor() {
        super({ key: 'InstructionsPart2Scene' });
    }


    preload(){}

    create(){

      

        this.enter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
      
        
        var text1= this.add.text(40, 40, 'Os Oceanos precisam ser limpos para o Planeta renascer!!!', { fill: '#12EFE8' });
        var text2= this.add.text(45, 130, 'Controlas o mergulhador que tem de limpar o Oceano ', { fill: '#12EFE8' });
        var text3= this.add.text(45, 160, 'O principal objetivo é limpar o Plástico existente ', { fill: '#12EFE8' });
        var text4= this.add.text(45, 190, 'Cada garrafa de plástico dá-te 150 pontos ', { fill: '#12EFE8' });
        var text5= this.add.text(45, 220, 'Qualquer outro lixo que encontres no Oceano dá-te mais 50 ', { fill: '#12EFE8' });
        var text6= this.add.text(45, 250, 'No entanto só tens 180 segundos de oxigénio disponivel  ', { fill: '#12EFE8' });
        var text7= this.add.text(45, 280, 'Quando ele termina, perdes uma das tuas 5 vidas. ', { fill: '##12EFE8' });
        var text8= this.add.text(45, 310, 'Cuidado com os predadores e as paredes escarposas da Caverna ', { fill: '#12EFE8' });
        var text9= this.add.text(45, 340, 'Só tens 100 de Energia, e quando ela chega ao fim', { fill: '#12EFE8' });
        var text10= this.add.text(45, 370, 'perdes uma vida. Quando isso acontece regressas ao incio ', { fill: '#12EFE8' });
        var text11= this.add.text(45, 400, 'Quando perdes as 5 vidas é Game Over. ', { fill: '#12EFE8' });
        var text12= this.add.text(260, 430, 'Pressiona Enter para continuar!', { fill: '#12EFE8' })
       
    }

    update(){
        if(this.enter.isDown){
            this.startGame();
        }
    }

    startGame(){
        this.scene.start("InstructionsPart3Scene");
    }





}