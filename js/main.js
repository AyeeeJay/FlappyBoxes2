//Initalize Phaser Engine. Create a 400x490px game!

var game = new Phaser.Game(400, 490, Phaser.AUTO, 'gameDiv' );

//Create our 'main' state that will contain the game 
//This is the body of the game itself
//It should contain all codes related to the game itself 

var mainState = {
  
  preload: function ( ) {
    //This function will execute at the beginning 
    //Which is where we'll load our assets for the game 
    
    //Set the backgorund color of the game 
   game.stage.backgroundColor = "#71c5cF" ;
   game.load.image('bird','Assets/bird.png');
   game.load.image('pipe', 'Assets/pipe.png');
    
    
},
  
  
 
  create: function () {
    //This function is called right after preload function 
    //This funciton is where we set up the game assets from earlier 
   game.physics.startSystem(Phaser.Physics.ARCADE);
  
  this.bird = this.game.add.sprite(100,245, 'bird');
    
  game.physics.arcade.enable(this.bird);  
    //Now that we have a bird and gravity.. we need to tell the bird
    //to react to the gravity

  game.physics.arcade.enable(this.bird);
  
  this.bird.body.gravity.y = 1000;
  
  
  var spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
  
   spaceKey.onDown.add(this.jump, this); 

  this.pipes = game.add.group ( );
   //Add the body to the group
  this.pipes.enableBody =true;
   //Create 20 pipes to hold in the group 
  this.pipes.createMultiple(20,'pipe');
   //Add in pipes over 1.5 sconds to the screen
  this.timer = game.time.events.loop(1500,this.addRowOfPipes, this);
 
  this.score = 0;
  this.labelScore = game.add.text(20,20, "0",{font: "30px Arial", fill: "#ffffff"});
  
  
  },
    update: function () {
  //This funciton runs 60 times per second
  //Check if the bird is outside of the gamescreen
 if (this.bird.inWorld == false) {
    this.restartGame(); 
    }
    game.physics.arcade.overlap(this.bird , this.pipes, this.restartGame,null,this); 
},

  addOnePipe: function (x,y) {
  //Get the first dead pipe in our group 
  var pipe = this.pipes.getFirstDead ();
  //set the new positon 
  pipe.reset(x,y);

//Move the pipes to the left of the screen
pipe.body.velocity.x = -200;

//Kill the pipe if it's off the screen at any point
pipe.checkWorldBounds = true;
pipe.outOfBoundsKill = true;
},

addRowOfPipes: function (){
  var hole = Math.floor(Math.random() *5) + 1;
  
  for(var i = 0; i < 8; i++) 
if ( i != hole && i != hole + 1){
  
  this.addOnePipe(400, i*60 + 10 );
 
    }

    this.score+=1;
    this.labelScore.text = this.score;
},
jump: function (){
  
  //Let's make our bird jump!
this.bird.body.velocity.y= -350;
},


restartGame: function ( ) {
  game.state.start('main');

},

};

//Add an start the'mainStage' to start the game 
game.state.add('main', mainState);
game.state.start('main');
