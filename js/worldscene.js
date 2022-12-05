class WorldScene extends Phaser.Scene {


    constructor() {
        super({ key: 'WorldScene' });
    }


    preload() { }

    create() {

        var mapa = this.make.tilemap({ key: 'map' });

        // obter os nomes dos tilesets, disponiveis no ficheiro JSON
        // No platform_tiles e no cave_tiles, foi necessário adicionar valores para margem
        // e espaçamento, para corrigir Tiles Bleeding

        var tiles1 = mapa.addTilesetImage("platformer_tiles", "water", 16, 16, 1, 2);
        var tiles2 = mapa.addTilesetImage("cave_background", "background", 16, 16);
        var tiles3 = mapa.addTilesetImage("cave_props", "props", 16, 16);
        var tiles4 = mapa.addTilesetImage("cave_tiles", "cave", 16, 16, 1, 2);
        var tiles5 = mapa.addTilesetImage("sky", "ceu", 16, 16);
        var tiles6 = mapa.addTilesetImage("recycle_bins", "reciclagem", 16, 16);

        // Obtem a layer do céu e adiciona ao mapa
        var sky = mapa.createStaticLayer('sky', tiles5, 0, 0);

        //Obter o layer da parede da terra

        var land_wall = mapa.createStaticLayer('land', tiles1, 0, 0);

        // Obtem a layer do céu e adiciona ao mapa
        var water = mapa.createStaticLayer('clean_water', tiles1, 0, 0);

        // Obtem o layer do fundo da caverna e adiciona ao mapa
        var fundo = mapa.createStaticLayer('cave_background', tiles2, 0, 0);

        // Obtem o layer de elementos inerentes à caverna
        var props = mapa.createStaticLayer('background_elements', tiles3, 0, 0);

        //Obter o layer das paredes da caverna
        var cave_walls = mapa.createStaticLayer('walls', tiles4, 0, 0);



        //Obter o layer da reclicagem

        var recycle = mapa.createStaticLayer('recycle', tiles6, 0, 0);




        // sky deteta colisoes
        sky.setCollisionByExclusion([-1]);

        // cave_walls deteta colisoes
        cave_walls.setCollisionByExclusion([-1]);

        //land_wall deteta colisoes
        land_wall.setCollisionByExclusion([-1]);



        //Adicionar o jogador

        this.player = this.physics.add.sprite(200, 1200, 'player', 6);
        this.player.body.setSize(15, 15, true);


        // -- Input Interação com 4 setas de direçao
        this.cursors = this.input.keyboard.createCursorKeys();

        // colocar uma camara a seguir o player 
        this.cameras.main.setBounds(0, 0, mapa.widthInPixels,
            mapa.heightInPixels);
        this.cameras.main.startFollow(this.player);


        //colisao do player com as paredes da caverna
        this.physics.add.collider(this.player, cave_walls, this.loseLife, null, this);

        // colisão com a layer sky, que indica que o jogador chegou à superficie
        this.physics.add.collider(this.player, sky, this.endGame, null, this);


        //colisao do player com os obstaculos
        this.physics.add.collider(this.player, land_wall);


        //--Animações do Player
        this.anims.create({
            key: 'esquerdadireita',
            frames: this.anims.generateFrameNumbers('player', { frames: [0, 1, 2, 3, 4, 5, 6] }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'up',
            frames: this.anims.generateFrameNumbers('player', { frames: [0, 1, 2, 3, 4, 5, 6] }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'down',
            frames: this.anims.generateFrameNumbers('player', { frames: [0, 1, 2, 3, 4, 5, 6] }),
            frameRate: 10,
            repeat: -1
        });


        //-- Chamar frames do Lixo


        this.anims.create({
            key: 'one',
            frames: [{ key: 'lixo', frame: 0 }],
            frameRate: 10

        });


        this.anims.create({
            key: 'two',
            frames: [{ key: 'lixo', frame: 1 }],
            frameRate: 10

        });
        this.anims.create({
            key: 'three',
            frames: [{ key: 'lixo', frame: 2 }],
            frameRate: 10

        });

        this.anims.create({
            key: 'four',
            frames: [{ key: 'lixo', frame: 3 }],
            frameRate: 10

        });


        this.anims.create({
            key: 'five',
            frames: [{ key: 'lixo', frame: 4 }],
            frameRate: 10

        });
        this.anims.create({
            key: 'six',
            frames: [{ key: 'lixo', frame: 5 }],
            frameRate: 10

        });
        this.anims.create({
            key: 'seven',
            frames: [{ key: 'lixo', frame: 6 }],
            frameRate: 10

        });


        this.anims.create({
            key: 'eight',
            frames: [{ key: 'lixo', frame: 7 }],
            frameRate: 10

        });
        this.anims.create({
            key: 'nine',
            frames: [{ key: 'lixo', frame: 8 }],
            frameRate: 10

        });

        this.anims.create({
            key: 'ten',
            frames: [{ key: 'lixo', frame: 9 }],
            frameRate: 10

        });


        this.anims.create({
            key: 'eleven',
            frames: [{ key: 'lixo', frame: 10 }],
            frameRate: 10

        });
        this.anims.create({
            key: 'twelve',
            frames: [{ key: 'lixo', frame: 11 }],
            frameRate: 10

        });
        this.anims.create({
            key: 'thirteen',
            frames: [{ key: 'lixo', frame: 12 }],
            frameRate: 10

        });
        this.anims.create({
            key: 'fourteen',
            frames: [{ key: 'lixo', frame: 13 }],
            frameRate: 10

        });


        //- Animação dos peixes inofensivos
        this.anims.create({
            key: 'inofensivo1',
            frames: this.anims.generateFrameNumbers('fish1', { frames: [0, 1,] }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'inofensivo2',
            frames: this.anims.generateFrameNumbers('fish2', { frames: [0, 1,] }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'inofensivo3',
            frames: this.anims.generateFrameNumbers('fish3', { frames: [0, 1,] }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'inofensivo4',
            frames: this.anims.generateFrameNumbers('fish4', { frames: [0, 1,] }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'inofensivo5',
            frames: this.anims.generateFrameNumbers('fish5', { frames: [0, 1,] }),
            frameRate: 10,
            repeat: -1
        });

        //- Animação dos peixes predadores
        this.anims.create({
            key: 'predadores1',
            frames: this.anims.generateFrameNumbers('predador1', { frames: [0, 1,] }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'predadores2',
            frames: this.anims.generateFrameNumbers('predador2', { frames: [0, 1,] }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'predadores3',
            frames: this.anims.generateFrameNumbers('predador3', { frames: [0, 1,] }),
            frameRate: 5,
            repeat: -1
        });



        //- timer para spawn do lixo
         this.time.addEvent({
            delay: 3000,
            callback: this.carregaLixo,
            callbackScope: this, loop: true
        });

        //-timer para colocar tempo limite no jogo
         this.time.addEvent({
            delay: 1000,
            callback: this.atualizaTimer,
            callbackScope: this, loop: true
        });

        this.audioOnOff = true;
        // --som
        this.somPredadores = this.sound.add('somPredadores');
        this.somBonus = this.sound.add('somBonus');
        this.somParedes = this.sound.add('somParedes');
        this.music = this.sound.add('music', { loop: true });
        this.music.play();

        
          // função que desenha e anima os peixes predadores
        this.carregaPredadores();
            //Colisões que os predadores estão envolvidos
        this.physics.add.collider(this.predadores, cave_walls, this.alteraPre, null, this);
        this.physics.add.collider(this.predadores, land_wall, this.alteraPreLand, null, this);
        this.physics.add.overlap(this.player, this.predadores, this.loseLifePredador, null, this);



          //função que desenha e anima os peixes inofensivos
        this.carregaInofensivos();
        // Colisoes que os inofensivos estão envolvidos
        this.physics.add.collider(this.inofensivo, cave_walls, this.altera, null, this);
        this.physics.add.collider(this.inofensivo, land_wall, this.alteraLand, null, this);
     
         // função que desenha e dispoe no mapa as garrafas de plástico
        this.carregaLixo2();

        // Informação do cimo da Página referente a vidas, energia, tempo de jogo e pontuação
        this.energy = 100;
        this.life = 5;
        this.score = 0;
        this.points = 0;
        this.tempo = 180;
        this.lifeSpan = this.add.text(0, 0, 'Energia: 100', { fontSize: '20px', fill: '#FFFFFF' }).setScrollFactor(0);
        this.textoTempo = this.add.text(450, 0, 'Tempo: 180', { fontSize: '20px', fill: '#FFFFFF' }).setScrollFactor(0);
        this.textoPont = this.add.text(450, 30, 'Pontos: 0', { fontSize: '20px', fill: '#FFFFFF' }).setScrollFactor(0);
        this.textoVida = this.add.text(0, 30, 'Vida: 5', { fontSize: '20px', fill: '#FFFFFF' }).setScrollFactor(0);

    }


       // altera a direção dos predadores quando colide com a parede das cavernas
    alteraPre(predadores, cave_walls) {
        if (predadores.flipX) {
            predadores.setVelocityX(20);
            predadores.flipX = false;
        }
        else {
            predadores.setVelocityX(-20);
            predadores.flipX = true;
        }


    }
       // altera a direção dos predadores quando colide com a parede da superficie
    alteraPreLand(predadores, land_wall) {
        predadores.setVelocityX(-20);
        predadores.flipX = true;
    }

       // altera a direção dos inofensivos quando colide com a parede das cavernas
    altera(inofensivo, cave_walls) {

        if (inofensivo.flipX) {
            inofensivo.setVelocityX(20);
            inofensivo.flipX = false;
        }
        else {
            inofensivo.setVelocityX(-20);
            inofensivo.flipX = true;
        }
    }
    // altera a direção dos inofensivos quando colide com a parede da superficie
    alteraLand(inofensivo, land_wall) {
        inofensivo.setVelocityX(-20);
        inofensivo.flipX = true;
    }

       // função de quando há colisão entre o jogador e o lixo 
    cleanSea(player, lixo) {

        lixo.disableBody(true, true);
        this.score += 50;
        this.textoPont.setText("Pontos: " + this.score);
        this.playSomBonus();

    }

    //metodo atualiza timer, que faz com que o tempo diminui , e quando este atinge 0,  
    // o jogador perde 1 vida, sempre que o tempo chega a 0, e os restantes valores sofrem reset,
    // assim como o jogador é reposicionado na posição inicial
    atualizaTimer() {
        this.tempo--;
        this.textoTempo.setText("Tempo: " + this.tempo);
        if (this.tempo == 0) {
            this.life--;
            this.tempo = 180;
            this.energy = 100;
            this.player.x = 200;
            this.player.y = 1200;
            this.lifeSpan.setText("Energia: " + this.energy);
            this.textoVida.setText("Vida: " + this.life);
             // todas as garrafas são apagadas, para ser redesenhadas logo de seguida
             this.lixo2.clear(true);
             this.carregaLixo2();
             // se as vidas chegam a 0, é game over
            if (this.life == 0) {
                this.gameOver();
            }
        }
    }
          // método que desenha e dispoe os peixes predadores no mapa
    carregaPredadores() {

        this.predadores = this.physics.add.group();
        this.predadores.create(865, 400, 'predador1').play('predadores1');
        this.predadores.create(1000, 315, 'predador1').play('predadores1');
        this.predadores.create(382, 1082, 'predador1').play('predadores1');
        this.predadores.create(187, Phaser.Math.Between(562, 586), 'predador1').play('predadores1');
        this.predadores.create(Phaser.Math.Between(865, 1010), Phaser.Math.Between(1000, 1300), 'predador2').play('predadores2');
        this.predadores.create(Phaser.Math.Between(572, 1010), 441, 'predador3').play('predadores3');
        this.predadores.create(Phaser.Math.Between(204, 292), 350, 'predador2').play('predadores2');
        this.predadores.create(Phaser.Math.Between(504, 1100), Phaser.Math.Between(824, 1034), 'predador2').play('predadores2');
        this.predadores.create(Phaser.Math.Between(188, 470), 687, 'predador3').play('predadores3');
        this.predadores.create(Phaser.Math.Between(228, 488), 1423, 'predador1').play('predadores1');
        this.predadores.create(Phaser.Math.Between(167, 420), 242, 'predador1').play('predadores1');
        this.predadores.create(Phaser.Math.Between(510, 600), 890, 'predador1').play('predadores1');
        this.predadores.create(Phaser.Math.Between(510, 600), 800, 'predador2').play('predadores2');
        this.predadores.create(Phaser.Math.Between(865, 1010), Phaser.Math.Between(549, 1000), 'predador1').play('predadores1');
        this.predadores.create(Phaser.Math.Between(276, 622), 1473, 'predador3').play('predadores3');

        this.predadores.setVelocityX(20, 5);


    };
         // método que desenha e dispoe os peixes inofensivos no mapa
    carregaInofensivos() {

        this.inofensivo = this.physics.add.group();
        this.inofensivo.create(100, 1200, 'fish1').play('inofensivo1');
        this.inofensivo.create(100, 1300, 'fish1').play('inofensivo1');
        this.inofensivo.create(Phaser.Math.Between(865, 1010), Phaser.Math.Between(300, 1300), 'fish1').play('inofensivo1');
        this.inofensivo.create(Phaser.Math.Between(865, 1010), Phaser.Math.Between(300, 1300), 'fish1').play('inofensivo1');
        this.inofensivo.create(Phaser.Math.Between(865, 1010), Phaser.Math.Between(300, 1300), 'fish1').play('inofensivo1');
        this.inofensivo.create(Phaser.Math.Between(865, 1010), Phaser.Math.Between(300, 1300), 'fish1').play('inofensivo1');
        this.inofensivo.create(Phaser.Math.Between(500, 630), Phaser.Math.Between(868, 1000), 'fish3').play('inofensivo3');
        this.inofensivo.create(Phaser.Math.Between(500, 630), Phaser.Math.Between(868, 1000), 'fish3').play('inofensivo3');
        this.inofensivo.create(Phaser.Math.Between(500, 630), Phaser.Math.Between(540, 930), 'fish4').play('inofensivo4');
        this.inofensivo.create(Phaser.Math.Between(159, 348), 556, 'fish4').play('inofensivo4');
        this.inofensivo.create(Phaser.Math.Between(159, 348), 580, 'fish4').play('inofensivo4');
        this.inofensivo.create(Phaser.Math.Between(159, 348), 600, 'fish4').play('inofensivo4');
        this.inofensivo.create(Phaser.Math.Between(190, 400), 200, 'fish5').play('inofensivo5');
        this.inofensivo.create(Phaser.Math.Between(190, 400), 300, 'fish5').play('inofensivo5');
        this.inofensivo.setVelocityX(20, 5);
        for (var i = 0; i < 10; i++) {
            var inofensivo = this.inofensivo.create(i * 127 + 100, Phaser.Math.Between(263, 331), 'fish1').play('inofensivo1');
            inofensivo.setVelocityX(20, 5);

        }
        for (var i = 0; i < 5; i++) {
            var inofensivo = this.inofensivo.create(i * 200 + 100, Phaser.Math.Between(1360, 1400), 'fish2').play('inofensivo2');
            inofensivo.setVelocityX(20, 5);

        }

        for (var i = 0; i < 10; i++) {
            var inofensivo = this.inofensivo.create(Phaser.Math.Between(865, 1010), i * 300 + 5, 'fish2').play('inofensivo2');
            inofensivo.setVelocityX(20, 5);

        }

        for (var i = 0; i < 2; i++) {
            var inofensivo = this.inofensivo.create(Phaser.Math.Between(159, 348), i * 556, 'fish4').play('inofensivo4');
            inofensivo.setVelocityX(20, 5);

        }
    }


         // método que desenha e faz aparecer de forma random no mapa
    carregaLixo() {


        var rndx = Phaser.Math.Between(120, 980);

        //colisao do player com o lixo
        this.physics.add.overlap(this.player, this.lixo, this.cleanSea, null, this);


        this.lixo = this.physics.add.sprite(rndx, 0, 'lixo');

        //-- Seleciona aleatoriamente o sprite do spritesheet «lixo» a ser criado
        var random = Math.random();
        switch (true) {

            case (random <= 0.06):
                this.lixo.anims.play('one');
                this.lixo.setVelocityY(50);
                if (this.lixo.body.y > 3136) {
                    this.lixo.kill();
                }
                break;

            case (random > 0.06 && random <= 0.12):

                this.lixo.anims.play('two');
                this.lixo.setVelocityY(50);
                if (this.lixo.body.y > 3136) {
                    this.lixo.kill();
                }
                break;

            case (random > 0.12 && random <= 0.18):

                this.lixo.anims.play('three');
                this.lixo.setVelocityY(50);
                if (this.lixo.body.y > 3136) {
                    this.lixo.kill();
                }
                break;

            case (random > 0.18 && random <= 0.24):

                this.lixo.anims.play('four');
                this.lixo.setVelocityY(50);
                if (this.lixo.body.y > 3136) {
                    this.lixo.kill();
                }
                break;

            case (random > 0.24 && random <= 0.30):

                this.lixo.anims.play('five');
                this.lixo.setVelocityY(50);
                if (this.lixo.body.y > 3136) {
                    this.lixo.kill();
                }
                break;

            case (random > 0.30 && random <= 0.36):

                this.lixo.anims.play('six');
                this.lixo.setVelocityY(50);
                if (this.lixo.body.y > 3136) {
                    this.lixo.kill();
                }
                break;

            case (random > 0.36 && random <= 0.42):

                this.lixo.anims.play('seven');
                this.lixo.setVelocityY(50);
                if (this.lixo.body.y > 3136) {
                    this.lixo.kill();
                }
                break;
            case (random > 0.42 && random <= 0.48):

                this.lixo.anims.play('eight');
                this.lixo.setVelocityY(50);
                if (this.lixo.body.y > 3136) {
                    this.lixo.kill();
                }
                break;

            case (random > 0.48 && random <= 0.54):

                this.lixo.anims.play('nine');
                this.lixo.setVelocityY(50);
                if (this.lixo.body.y > 3136) {
                    this.lixo.kill();
                }
                break;

            case (random > 0.54 && random <= 0.60):

                this.lixo.anims.play('ten');
                this.lixo.setVelocityY(50);
                if (this.lixo.body.y > 3136) {
                    this.lixo.kill();
                }
                break;

            case (random > 0.60 && random <= 0.66):

                this.lixo.anims.play('eleven');
                this.lixo.setVelocityY(50);
                if (this.lixo.body.y > 3136) {
                    this.lixo.kill();
                }
                break;

            case (random > 0.66 && random <= 0.72):

                this.lixo.anims.play('twelve');
                this.lixo.setVelocityY(50);
                if (this.lixo.body.y > 3136) {
                    this.lixo.kill();
                }
                break;

            case (random > 0.72 && random <= 0.85):

                this.lixo.anims.play('thirteen');
                this.lixo.setVelocityY(50);
                if (this.lixo.body.y > 3136) {
                    this.lixo.kill();
                }
                break;


            case (random > 0.085):

                this.lixo.anims.play('fourteen');
                this.lixo.setVelocityY(50);
                if (this.lixo.body.y > 3136) {
                    this.lixo.kill();
                }
                break;
        }

    }
     // método que desenha e dispoe o Lixo fixo (garrafas de plastico) no mapa
    carregaLixo2() {

        this.lixo2 = this.physics.add.group();
        this.lixo2.create(291, 1439, 'lixo2');
        this.lixo2.create(177, 242, 'lixo2');
        this.lixo2.create(242, 1109, 'lixo2');
        this.lixo2.create(625, 850, 'lixo2');
        this.lixo2.create(500, 950, 'lixo2');
        this.lixo2.create(179, 590, 'lixo2');
        this.lixo2.create(350, 590, 'lixo2');
        this.lixo2.create(397, 1082, 'lixo2');
        this.lixo2.create(617, 1028, 'lixo2');
        this.lixo2.create(695, 1380, 'lixo2');
        this.lixo2.create(695, 414, 'lixo2');
        this.lixo2.create(418, 756, 'lixo2');
        this.lixo2.create(268, 300, 'lixo2');
        for (var i = 0; i < 10; i++) {
            this.lixo2.create(Phaser.Math.Between(865, 1010), i * 300 + 5, 'lixo2');
        }

        this.physics.add.overlap(this.player, this.lixo2, this.cleanSea2, null, this);

    };


       // método que quando há colisao entre o jogador e as garrafas de plástico, estas desaparecem,
       // e a pontução é atualizada, assim como há efeito sonoro
    cleanSea2(player, lixo2) {

        lixo2.disableBody(true, true);
        this.score += 150;
        this.textoPont.setText("Pontos: " + this.score);
        this.playSomBonus();

    }

     // método que faz com que o jogador perca energia quando colide com o Predador
     // Quando a energia chega a 0, a vida diminui um valor, e é feito reset nos restantes valores
     // assim como o jogador regressa ao ponto inicial
    loseLifePredador() {

        this.cameras.main.shake(100);
        this.energy--;
        this.lifeSpan.setText("Energia: " + this.energy);
        this.playSomPredador();
        if (this.energy == 0) {
            this.life--;
            this.energy = 100;
            this.player.x = 200;
            this.player.y = 1200;
            this.score = 0;
            this.textoPont.setText("Pontos: " + this.score);
            this.lifeSpan.setText("Energia: " + this.energy);
            this.textoVida.setText("Vida: " + this.life);

            // todas as garrafas são apagadas, para ser redesenhadas logo de seguida
            this.lixo2.clear(true);
            this.carregaLixo2();

            // Quando a vida chega a 0,  é game over
            if (this.life == 0) {
                this.gameOver();
            }

        }

    }
    
     // método que faz com que o jogador perca energia quando colide com as paredes da caverna
     // Quando a energia chega a 0, a vida diminui um valor, e é feito reset nos restantes valores
     // assim como o jogador regressa ao ponto inicial
    loseLife() {

        this.cameras.main.shake(100);
        this.energy--;
        this.lifeSpan.setText("Energia: " + this.energy);
        this.playSomParedes();
        if (this.energy == 0) {
            this.life--;
            this.energy = 100;
            this.player.x = 200;
            this.player.y = 1200;
            this.score = 0;
            this.textoPont.setText("Pontos: " + this.score);
            this.lifeSpan.setText("Energia: " + this.energy);
            this.textoVida.setText("Vida: " + this.life);

            // todas as garrafas são apagadas, para ser redesenhadas logo de seguida
            this.lixo2.clear(true);
            this.carregaLixo2();

             // Quando a vida chega a 0,  é game over
            if (this.life == 0) {
                this.gameOver();
            }

        }

    }
     // efeito sonoro, de colisão entre jogador e predador
    playSomPredador() {
        if (this.audioOnOff) {
            this.somPredadores.play();
        }
    }
      // efeito sonoro, de colisão entre jogador e paredes da caverna
    playSomParedes() {
        if (this.audioOnOff) {
            this.somParedes.play();
        }
    }

       // efeito sonoro, de colisão entre jogador e lixo /garrafas de plástico
    playSomBonus() {
        if (this.audioOnOff) {
            this.somBonus.play();
        }
    }


    update() {
           // movimento do jogador
        this.player.body.setVelocity(0);
        if (this.cursors.left.isDown) {
            this.player.body.setVelocityX(-80);
        } else if (this.cursors.right.isDown) {
            this.player.body.setVelocityX(80);
        }
        if (this.cursors.up.isDown) {
            this.player.body.setVelocityY(-80);
        } else if (this.cursors.down.isDown) {
            this.player.body.setVelocityY(80);
        }



        // -- animações do player
        if (this.cursors.left.isDown) {
            this.player.anims.play('esquerdadireita', true);
            this.player.flipX = true;
        } else if (this.cursors.right.isDown) {
            this.player.anims.play('esquerdadireita', true);
            this.player.flipX = false;
        }
        else if (this.cursors.up.isDown) {
            this.player.anims.play('up', true);
        } else if (this.cursors.down.isDown) {
            this.player.anims.play('down', true);
        } else {
            this.player.anims.stop();
        }


    }
        //funcao fim de jogo
    endGame() {
        this.sound.get('music').stop();
        this.scene.start("ResultadosFinais", this.score);
    }
       // funcao game over
    gameOver() {
        this.sound.get('music').stop();
        this.scene.start("GameOver");
    }







}