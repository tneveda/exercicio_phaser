class StartScene extends Phaser.Scene {


    constructor() {
        super({ key: 'StartScene' });
    }


    preload() { }

    create() {

        var bg = this.add.sprite(0, 0, 'mapa');
        bg.setOrigin(0, 0);

        this.title = this.physics.add.sprite(140, 150, 'title', 6);
        this.title.setOrigin(0, 0);


        this.clickButton = this.add.text(260, 350, 'Novo Jogo', { fontSize: '25px', fill: '#12EFE8' })
            .setInteractive()
            .on('pointerdown', () => this.scene.start("WorldScene"));

        this.clickButton = this.add.text(250, 400, 'Instrucoes', { fontSize: '25px', fill: '#12EFE8' })
            .setInteractive()
            .on('pointerdown', () => this.scene.start("InstructionsScene"));


    }
}

