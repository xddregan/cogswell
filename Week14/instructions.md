
## Signature Assignmet
## To be completed in class


### take breakout.html as basis
#### Note there are 5 phases so read through all before starting 

- (Phase I)Create a simple 3d breakout game 
	1. Create the areana back-plane texture is in texturs/breakoutbak.jpg
	1. The dimentions are -50, to 50 in Z, -35 to 35 in Z 
	1. See constants leftSideX,rightSideX, topZ,bottomZ;
	1. There are 9 pills across with 1 pill space on either side  - numPillsX;
	1. Pills are 0.95 1/11th of the width 
	1. There are 7 rows of pills  - numRows
	1. pills use constant pillHeight
	1. ball is diameter pillHeight
	1. ballSpeed is defined
	1. ballDirection is defined.
	1. You will need to create the following

```javascript
			var pills = [];  // TODO add pills to this array when you create them		
			var walls = [];  // TODO add walls to this array you create	
			var paddle;   // TODO need to create paddle 
			var ball;    // TODO need to create ball

```
### This is what phase 1 should look like
![](mdimages/shot2.png "Shot1")

- (Phase II) Ball moving 
	1. Uncomment the line ```//updateBallMovement(delta); ``` 
	1. Check the ball is moving
	1. Add paddle movement so paddles move left to right withing the limits on a key or mouse


- (Phase III) Pill collision and pill types 
	1. Create 3 types of pills normal (90%), metal(5%) , bomb(5%)
		1. Attach a property to the pill when you create it ```pill.myType = "normal" ```
	1. When creating pills use different materials for the different types   
	1. fill out function pillHitOccured
		1. if pill.myType == 'normal' 
			- remove pill from pills list
			- remove pill from scene	
			- score +=1
		2. if pill.myType == 'metal'
			- change pill.myType = 'normal';
			- update the pill material to the normal material	
			- score +=1
		3. if pill.myType == 'bomb'
			- destroy the pill (remove from pills and scene)
			- destroy it's adjacent neigbors
			- score += 1 * number of neighbors destroyed

- (Phase IV) Score 
	- Add a UI that shows current score 

- (Phase V) Reset
	-  if ball hits the bottom wall
		- Reset the paddle to center
		- Reset the ball to just above paddle and set it moving  
		- Reset the score 0 
	


![](mdimages/shot1.png "Shot1")
