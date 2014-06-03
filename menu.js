var menu_state = {
  
   create: function() {

	character = 'Lily';

	LunaSelect = this.game.add.sprite(24, 109, 'Selected');
	LilySelect = this.game.add.sprite(224, 109, 'Selected');
	
	 //LilySelect.visible =! LilySelect.visible;
	 LunaSelect.visible = false;


	   this.Luna = this.game.add.button(25, 110, 'Luna1', this.LunaOnClick);
	   this.Lily = this.game.add.button(225, 110, 'Lily1', this.LilyOnClick);
	   this.Play = this.game.add.button(game.world.centerX - 58, 315, 'Play', this.start);        


// Defining variables
        var style = { font: "30px Arial", fill: "#ffffff" };
        var x = game.world.width/2, y = game.world.height/2;
        
        // Adding a text centered on the screen
        var text = this.game.add.text(x, y-190, "Choose your character\n            to begin", style);
        text.anchor.setTo(0.5, 0.5); 

	  var text2 = this.game.add.text(x, 285, "Luna                 Lily", style);
        text2.anchor.setTo(0.5, 0.5); 


        // If the user already played
        if (score >= 0) {
            // Display its score
            var score_label = this.game.add.text(x, y+155, "Score: " + score, style);
            score_label.anchor.setTo(0.5, 0.5); 
        }
	   
	   if (highscore == null) {
           highscore = 0;
        }

	   if (score > highscore){
		highscore = score;
	   }

	   if (highscore >= 0) {
            // Display its highscore
            var highscore_label = this.game.add.text(x, y+190, "Highscore: " + highscore, style);
            highscore_label.anchor.setTo(0.5, 0.5); 
        }

    },

	update: function() {
		//if (game.input.activePointer.isDown){
	  	//this.start();}
	   }, 

	LilyOnClick: function() {

	 LilySelect.visible = true;
	 LunaSelect.visible = false;

    	character = 'Lily';
	console.log(character);
},

	LunaOnClick: function() {

	LilySelect.visible = false;
	LunaSelect.visible = true;

	character = 'Luna';
	console.log(character);
},


	  

    // Start the actual game
    start: function() {
	   spawnrate = 13;
	   pipe1 = null;
        this.game.state.start('play');
    }
};