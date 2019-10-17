/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
    class GameObject{
        constructor (attributes){
        this.createdAt = attributes.createdAt,
        this.name = attributes.name,
        this.dimensions =attributes.dimensions
        }
        destroy(){
        return `${this.name} was removed from the game.`
        };
    }
  /*
    === CharacterStats ===
    * healthPoints
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */
    class CharacterStats extends GameObject{
        constructor(childAttributes){
            super(childAttributes);
        this.healthPoints = childAttributes.healthPoints
        
        }
        takeDamage(){
        return `${this.name} took damage.`
        };
   
    }   
  /*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */
   class Humanoid extends CharacterStats{
        constructor(grandAttributes){
        super(grandAttributes);
        this.team = grandAttributes.team,
        this.weapons = grandAttributes.weapons,
        this.language = grandAttributes.language
        
        }
        greet(){
        return `${this.name} offers a greeting in ${this.language}.`
        }
    };

  class Villian extends Humanoid{
        constructor(greatGrandAttributes) {
        super(greatGrandAttributes);
        this.name = greatGrandAttributes.name,
        this.weapons = greatGrandAttributes.weapons,
        this.damage = greatGrandAttributes.damage,
        this.hp = greatGrandAttributes.hp
        }
        Damage(char){
        return `${this.name} attacks ${char.name} with a ${this.weapons} and did ${this.damage} damage to the Hero! The hero now has ${char.hp = char.hp-this.damage} health.`
        }
        Destruction(char1, char2){
        if (this.hp <= 0){
            return `${this.name} has 0 hp! ${this.name} is now unconscious.`
        }else if (this.hp <= 5){
            return `${this.name} has ${this.hp}! They are very low on health!`
        }else { return `${char1.name} glares at ${char2.name}`}
        
        }
    };   
    
    class Hero extends Villian{
        constructor(greatGreatGrandAttributes) {
        super(greatGreatGrandAttributes);
        this.name = greatGreatGrandAttributes.name,
        this.weapons = greatGreatGrandAttributes.weapons,
        this.damage = greatGreatGrandAttributes.damage,
        this.hp = greatGreatGrandAttributes.hp
        }
        Damage(char){
        return `${this.name} attacks ${char.name} with a ${this.weapons} and did ${this.damage} damage to the Villian! The Villian now has ${char.hp= char.hp-this.damage} health.`
        }
        Destruction(char1, char2){
        if (this.hp <= 0){
            return `${this.name} has 0 hp! ${this.name} is now unconscious.`
        }else if (this.hp <= 5){
            return `${this.name} has ${this.hp}! They are very low on health!`
        }else { return `${char1.name} glares at ${char2.name}`}
        
        }
    };  
    
    
  /*
    * Inheritance chain: GameObject -> CharacterStats -> Humanoid
    * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
    * Instances of CharacterStats should have all of the same properties as GameObject.
  */
  
  // Test you work by un-commenting these 3 objects and the list of console logs below:
  
  
    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
  
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
    const Snyder = new Villian({
      name: 'Snyder the Villian',
      weapons: 'Sythe of Loathing',
      damage: 25,
      hp: 250
      });
      
      const Stan = new Hero({
      name: 'Stan the Hero',
      weapons: 'Lance of Light',
      damage: 30,
      hp: 180
      });
    console.log(mage.createdAt); // Today's date
    console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.healthPoints); // 15
    console.log(mage.name); // Bruce
    console.log(swordsman.team); // The Round Table
    console.log(mage.weapons); // Staff of Shamalama
    console.log(archer.language); // Elvish
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(mage.takeDamage()); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
    console.log(Snyder.Damage(Stan));
    console.log(Snyder.Destruction(Stan, Snyder));
    console.log(Stan.Damage(Snyder));
    console.log(Stan.Destruction(Snyder, Stan));
    console.log(Snyder.Damage(Stan));
    console.log(Snyder.Destruction(Stan, Snyder));
    console.log(Stan.Damage(Snyder));
    console.log(Stan.Destruction(Snyder, Stan));
    console.log(Snyder.Damage(Stan));
    console.log(Snyder.Destruction(Stan, Snyder));
    console.log(Stan.Damage(Snyder));
    console.log(Stan.Destruction(Snyder, Stan));
    console.log(Snyder.Damage(Stan));
    console.log(Snyder.Destruction(Stan, Snyder));
    console.log(Stan.Damage(Snyder));
    console.log(Stan.Destruction(Snyder, Stan));
    console.log(Snyder.Damage(Stan));
    console.log(Snyder.Destruction(Stan, Snyder));
    console.log(Stan.Damage(Snyder));
    console.log(Stan.Destruction(Snyder, Stan));
    console.log(Snyder.Damage(Stan));
    console.log(Snyder.Destruction(Stan, Snyder));
    console.log(Stan.Damage(Snyder));
    console.log(Stan.Destruction(Snyder, Stan));
    console.log(Snyder.Damage(Stan));
    console.log(Stan.Destruction(Stan));
    console.log(Stan.Damage(Snyder));
    console.log(Stan.Destruction(Snyder, Stan));
    console.log(Snyder.Damage(Stan));
    console.log(Stan.Destruction(Stan));
    
    // Stretch task: 
    // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
    // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
    // * Create two new objects, one a villain and one a hero and fight it out with methods!