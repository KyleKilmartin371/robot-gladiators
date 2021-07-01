var playerName = window.prompt("What is your robots name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

var fight = function(enemyName) {
    //Alert player that they are starting the round
    while(playerHealth > 0 && enemyHealth > 0){
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    
    // if player choses to skip
    if (promptFight === "skip" || promptFight === "SKIP") {
        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");


        //if yes (true), leave fight
        if(confirmSkip) {
            window.alert(playerName + " has decided to skip this fight, Goodbye! ");
            //subtract money from playerMoney for skipping
            playerMoney = playerMoney -10;
            console.log("playerMoney",playerMoney);
            break;
        }
    }
        // if player choses to fight, then fight
        if (promptFight === "fight" || promptFight === "FIGHT") {
       //remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
        playerName + " attacked " +enemyName + "." + enemyName + " now has " + enemyHealth + " health remaining. "
        );

            //check enemy's health
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died! ");

            //award player money for winning
            playerMoney = playerMoney + 20;

            //lleave while() loop since enemy is dead
            break;
            }
            else {
                window.alert(enemyName + " still has " + enemyHealth + " health left ");
            }
}
    //Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable.
    playerHealth = playerHealth - enemyAttack;
    //Log a resulting message to the console so we know that it worked.
    console.log (
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    //check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died! ");
        break;
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
 }
};
//function to start a new game
var startGame = function(){
    //reset players stays
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

for(var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ));
    
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
    }
else{
    window.alert("You have lost your robot in battle! Game Over!");
    break;
    }
}

     //after the loop ends, player is either out of health or enemies to battle, so run the endGame function
     endGame();
};

    var endGame = function(){
        //if player is still alive, player wins!
        if (playerHealth > 0) {
            window.alert("Great job, you've survived the game! You now have a score of " + playerMoney +  ".");
        }
        else{
            window.alert("You've lost your robot in battle.");
        }
    
        //ask player if they'd like to play again
        var playAgainConfirm = window.confirm("Would yoou like to play again?");
    
        if (playAgainConfirm) {
            //restart the game
            startGame();
        }
        else{
            window.alert("Thank you for playing Robot Galdiators! Come back soon!");
        }
    };
//start the game when the page loads
startGame();
