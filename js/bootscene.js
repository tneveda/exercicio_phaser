class BootScene extends Phaser.Scene {


    constructor() {
        super({ key: 'BootScene' });
    }

    preload() {
        // load dos conteúdos
        this.load.image('water', "assets/maps/imagens/platformer_tiles_extruded.png");
        this.load.image('background', "assets/maps/imagens/cave_background.png");
        this.load.image('props', "assets/maps/imagens/cave_props.png");
        this.load.image('cave', "assets/maps/imagens/cave_tiles_extruded.png");
        this.load.image('ceu', "assets/maps/imagens/sky.png");
        this.load.image('reciclagem', "assets/maps/imagens/recycle_bins.png");


        this.load.image('mapa', 'assets/mapa.png');

        this.load.image('badPlanet', 'assets/gameover.jpg');

        this.load.image('title', 'assets/title.png');

        //mapa em formato JSON
        this.load.tilemapTiledJSON('map', 'assets/maps/mapa.json');


        // load da personagem
        this.load.spritesheet('player', 'assets/sprites/player-swimming.png',
            { frameWidth: 80, frameHeight: 80 });


        // load da personagem para o ecrã final
        this.load.spritesheet('player_end', 'assets/sprites/player-idle.png',
            { frameWidth: 80, frameHeight: 80 });


        // load dos predadores
        this.load.spritesheet('predador1', 'assets/sprites/predators/10.png',
            { frameWidth: 70, frameHeight: 29 });

        this.load.spritesheet('predador2', 'assets/sprites/predators/5.png',
            { frameWidth: 28, frameHeight: 24 });

        this.load.spritesheet('predador3', 'assets/sprites/predators/8.png',
            { frameWidth: 30, frameHeight: 12 });

        // load dos peixes inofensivos
        this.load.spritesheet('fish1', 'assets/sprites/fishes/1.png',
            { frameWidth: 12, frameHeight: 6 });

        this.load.spritesheet('fish2', 'assets/sprites/fishes/2.png',
            { frameWidth: 16, frameHeight: 12 });

        this.load.spritesheet('fish3', 'assets/sprites/fishes/3.png',
            { frameWidth: 20, frameHeight: 12 });

        this.load.spritesheet('fish4', 'assets/sprites/fishes/4.png',
            { frameWidth: 26, frameHeight: 12 });

        this.load.spritesheet('fish5', 'assets/sprites/fishes/7.png',
            { frameWidth: 30, frameHeight: 12 });




        // load do lixo
        this.load.spritesheet('lixo', 'assets/sprites/recycle_items.png',
            { frameWidth: 18, frameHeight: 44 });


        this.load.image('lixo2', 'assets/sprites/recycle2.png',
            { frameWidth: 18, frameHeight: 44 });

        this.load.image('lixo3', 'assets/sprites/recycle4.png',
            { frameWidth: 18, frameHeight: 26 });

        this.load.image('lixo4', 'assets/sprites/recycle15.png',
            { frameWidth: 18, frameHeight: 39 });

         //Load do audio de quando o player é atacado pelos predadores
            this.load.audio('somPredadores', ['assets/audio/bite.mp3',
            'assets/audio/bite.m4a',
            'assets/audio/bite.ogg'] );

          //Load do audio de quando o player atinge as paredes da caverna
            this.load.audio('somParedes', ['assets/audio/ouch.mp3',
            'assets/audio/ouch.m4a',
            'assets/audio/ouch.ogg'] );

         //Load do audio de quando o player apanha o lixo
            this.load.audio('somBonus', ['assets/audio/bonus.mp3',
            'assets/audio/bonus.m4a',
            'assets/audio/bonus.ogg'] );


            this.load.audio('music', ['assets/audio/yussef.mp3'] );

    }

    // Iniciar o Menu Start
    create() {
        this.scene.start('StartScene');
    }
}