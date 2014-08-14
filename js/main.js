//Initaliza Phaser Engine. Create a 400x490px game!

var game = new Phaser.Game(400, 490, PHASER.AUTO, 'gameDiv' );

//Create our 'main' state that will contain the game 
//This is the body of the game itself
//It should contain all codes related to the game itself 

var mainState = {
  
  preload: function ( ) {
    //This function will execute at the beginning 
    //Which is where we'll load our assets for the game 
    
    //Set the backgorund color of the game 
    game.stage.backgroundColor = "#71c5cF" ;
    
    
},
  
  
  create: function () {
    //This function is called right after preload function 
    //This funciton is where we set up the game assets from earlier 
    },
    
    update: function () {
  //This funciton runs 60 times per second
},
  
};


//Add an start the'mainStage' to start the game 

