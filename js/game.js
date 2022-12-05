var config = {
    type: Phaser.AUTO,
    parent: 'content',
    width: 626,
    height: 568,
    autoResize: true,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: [BootScene,
        WorldScene,
        StartScene,
        GameOver,
        ResultadosFinais,
        InstructionsScene,
        InstructionsPart2Scene,
        InstructionsPart3Scene,


    ]
};

var game = new Phaser.Game(config);