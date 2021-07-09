var randomNumber = function(min, max){
    var value = Math.floor(Math.random() * (max-min +1) + min);

    return value; 
}

var getPlayerName = function() {
    var name = "";

    while (name === "" || name === null) {
        name = prompt("What is your robot's name?");
    }

    console.log(" Your robot's name is " + name);
    return name;
}

var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    name:getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack =10;
    }, 
    refillHealth: function() {
        if (this.money >= 7) {
          window.alert("Refilling player's health by 20 for 7 dollars.");
          this.health += 20;
          this.money -= 7;
        } 
        else {
          window.alert("You don't have enough money!");
        }
      },
      upgradeAttack: function() {
        if (this.money >= 7) {
          window.alert("Upgrading player's attack by 6 for 7 dollars.");
          this.attack += 6;
          this.money -= 7;
        } 
        else {
          window.alert("You don't have enough money!");
        }
      }
};

var enemyInfo = [
    {
        name: "Roberto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber (10, 14)
    }
];

console.log(enemyInfo);
console.log(enemyInfo[0]);
console.log(enemyInfo[0].name);
console.log(enemyInfo[0]['attack']);

var fight = function(enemy) {
    //Alert player that they are starting the round
    while(playerInfo.health > 0 && enemy.health > 0){
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    
    // if player choses to skip
    if (promptFight === "skip" || promptFight === "SKIP") {
        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");


        //if yes (true), leave fight
        if(confirmSkip) {
            window.alert(playerInfo.name + " has decided to skip this fight, Goodbye! ");
            //subtract money from playerMoney for skipping
            playerInfo.money = Math.max(0, playerInfo.money - 10);
            console.log("playerMoney",playerinfo.money);
            break;
        }
    }
        // if player choses to fight, then fight
        if (promptFight === "fight" || promptFight === "FIGHT") {
       //remove enemy's health by subtracting the amount set in the playerAttack variable
       var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
       
       enemyHealth = Math.max(0, enemy.health - damage);
        console.log(
        playerInfo.name + " attacked " + enemy.name + "." + enemy.name + " now has " + enemy.health + " health remaining. "
        );

            //check enemy's health
            if (enemy.health <= 0) {
                window.alert(enemy.name + " has died! ");

            //award player money for winning
            playerInfo.money = playerInfo.money + 20;

            //lleave while() loop since enemy is dead
            break;
            }
            else {
                window.alert(enemy.name + " still has " + enemy.health + " health left ");
            }
}
    //Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable.
    var damage = randomNumber(enemy.attack -3, enemy.attack);

    playerInfo.health = Math.max(0, playerInfo.health - damage);
    //Log a resulting message to the console so we know that it worked.
    console.log (
    enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
    );

    //check player's health
    if (playerInfo.health <= 0) {
        window.alert(playerInfo.name + " has died! ");
        break;
    }
    else {
        window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
    }
 }
};
//function to start a new game
var startGame = function(){
    //reset players stays
    playerInfo.health = 100;
    playerInfo.reset();

for(var i = 0; i < enemyInfo.length; i++) {
    if (playerInfo.health > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ));

    var pickedEnemyObj = enemyInfo[i]; 
    pickedEnemyObj.health = randomNumber(40, 60);

    fight(pickedEnemyObj);

    //if we're not at the last enemy in the array
    if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
        var storeConfirm = window.confirm("The fight is over, visit the store before the next round?")
        //if yes take them to the store() function
        if (storeConfirm) {
        shop();
        }
    }
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
        if (playerInfo.health > 0) {
            window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money +  ".");
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

    var shop = function(){
        //ask the plater what they'd like to do
        var shopOptionPrompt = window.prompt(
            "would you like to REFILL your health, UPGRADE your attack, Or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
        );
        
        switch (shopOptionPrompt){
            case "Refill": 
            case "refill":
               playerInfo.refillHealth();
                break;
                case "UPGRADE": 
                case "upgrade":
                   playerInfo.upgradeAttack();
                break;

                case "LEAVE": //new case
                case "leave":
                    window.alert("Leaving the store.");

                //do nothing, so function will end
                break;
                default:
                    window.alert("You did not pick a valid option. Try again.");

                    //call shop() again to force player to pick a valid option  
                    shop();
                    break;
        }
         
    };

    var randomNumber = function(min, max){
        var value = Math.floor(Math.random() * (max-min +1) + min);

        return value; 
    }

//start the game when the page loads
startGame();