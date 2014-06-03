var load_state = {  
    preload: function() { 
        this.game.stage.backgroundColor = '#9a009a';
        this.game.load.image('bird', 'assets/guinea.png');  
        this.game.load.image('pipe', 'assets/cage.png');  
        this.game.load.audio('jump', 'assets/guinea_pig_shriek.wav');
	   this.game.load.image('Lily', 'assets/Lily2.png');  
	   this.game.load.image('Luna', 'assets/Luna2.png');
	   this.game.load.image('Lily1', 'assets/Lily1.png');  
	   this.game.load.image('Luna1', 'assets/Luna1.png');  
  
	   this.game.load.image('Selected', 'assets/Selected.png');
	   this.game.load.image('Play', 'assets/Play1.png');


},

    create: function() {
        // When all assets are loaded, go to the 'menu' state
        this.game.state.start('menu');
    }
};