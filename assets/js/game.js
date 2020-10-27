var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// Alert players that they are starting the round
window.alert("Welcome to Robot Gladiators!");


var fight = function(enemyName) {

    while (enemyHealth > 0 && playerHealth > 0) {
        // place fight function code block here . . .


        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        console.log(promptFight);


        // if player choses to fight, then fight
        if (promptFight === "fight" || promptFight === "FIGHT") {

            // remove enemy's health by subtracting the amount set} in the playerAttack variable
            enemyHealth = enemyHealth - playerAttack;
            console.log(
                playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
            );

            // check enemy's health
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!");
                break;
            } else {
                window.alert(enemyNames + " still has " + enemyHealth + " health left.");
            }
            if (enemyHealth > 0) { // if the enemy-robot has health points, continue to fight

                // remove player's health by subtracting the amount set in the enemyAttack variable
                playerHealth = playerHealth - enemyAttack;
                console.log(
                    enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
                );
            }
            // check to see if the value of the playerHealth variable is greater than 0
            if (playerHealth > 0) {
                console.log("Your player is still alive!");
            }

            if (playerHealth > 0) {
                // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
                window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

                // pick new enemy to fight based on the index of the enemyNames array
                var pickedEnemyName = enemyNames[i];

                // reset enemyHealth before starting new fight
                enemyHealth = 50;

                // use debugger to pause script from running and check what's going on at that moment in the code
                // debugger;

                // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
                fight(pickedEnemyName);

                window.alert(playerName + " has died!");
                break;
            }
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }

        // if player choses to skip
        if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        }
        // if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            // subtract money from playerMoney for skipping
            playerMoney = playerMoney - 10;
            console.log("playerMoney", playerMoney);
            break;
        }
        // if no (false), ask question again by running fight() again
        else {
            fight()
        }
    }

};

for (var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}

//fight()