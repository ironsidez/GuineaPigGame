var play_state = {

    // No more preload, since it is already done in the 'load' state

    create: function() { 

	  Math.seedrandom();

        var space_key = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        space_key.onDown.add(this.jump, this); 

        this.pipes = game.add.group();
        this.pipes.createMultiple(200, 'pipe');  
        //this.timer = this.game.time.events.loop(Math.random()*2000, this.add_row_of_pipes, this);           
	   this.timer = this.game.time.events.loop(300, this.add_row_of_pipes, this);           

        this.bird = this.game.add.sprite(100, 245, character);	   	   this.bird.body.gravity.y = 1000; 
        this.bird.anchor.setTo(-0.2, 0.5);
        
	  //this.bird.body.collideWorldBounds = true;
	  //this.bird.body.Bounce.set(1);


        // Not 'this.score', but just 'score'
        score = 0; 
        var style = { font: "30px Arial", fill: "#ffffff" };
        this.label_score = this.game.add.text(20, 20, "0", style); 

        this.jump_sound = this.game.add.audio('jump');
        this.hit_sound = this.game.add.audio('hit'); 

	       },

    update: function() {


if (game.input.activePointer.isDown && !this.touched) {
this.touched = true;
this.jump();
}

if (game.input.activePointer.isUp) {
this.touched = false;
}

	   this.pipes.forEachAlive(this.checkPipes, this);

	   //this.checkPipes();
	
        if (this.bird.inWorld == false)
            this.restart_game(); 

        if (this.bird.angle < 20)
            this.bird.angle += 1;

        this.game.physics.overlap(this.bird, this.pipes, this.hit_pipe, null, this);      
    },

checkPipes: function (pipe1) {

/*if (pipe1 == null){
pipe1 = this.pipes.getFirstExists();}
	
 */

		if (pipe1 != null && pipe1.x >= 98 && pipe1.x <= 102) {
			this.addToScore();
				}


	},

addToScore: function () {

	  score += 1; 
	  spawnrate += .7;
        this.label_score.content = score;  


	},

    jump: function() {
        if (this.bird.alive == false)
            return; 

        this.bird.body.velocity.y = -350;
        this.game.add.tween(this.bird).to({angle: -20}, 100).start();
        this.jump_sound.play();
    },

    hit_pipe: function() {
        if (this.bird.alive == false)
            return;

        this.bird.alive = false;
        this.game.time.events.remove(this.timer);

        this.pipes.forEachAlive(function(p){
            p.body.velocity.x = 0;
        }, this);
    },

    restart_game: function() {
        this.game.time.events.remove(this.timer);

        // This time we go back to the 'menu' state
        this.game.state.start('menu');
    },

    add_one_pipe: function(x, y) {
        var pipe = this.pipes.getFirstDead();
        pipe.reset(x, y);
        pipe.body.velocity.x = -200; 
        pipe.outOfBoundsKill = true;
    },

    add_row_of_pipes: function() {
     	   var hole = Math.floor(Math.random()*100);
	   console.log(hole);
	   console.log(spawnrate);
        if(hole <= spawnrate){
	   var i = Math.floor(Math.random()*28);
	   this.add_one_pipe(400, i*15+10);
			 	   }
    },
};