
function CharacterEx() {
	THREE.MD2Character.call(this);	
	this.speed = 15.0;
	this.state = 'standing';
	this.currentTarget;
	this.jumpTime = 0.3;

		//console.log('udpate being called',delta,this
}


CharacterEx.prototype = Object.create(THREE.MD2Character);
CharacterEx.prototype.constructor = CharacterEx;
CharacterEx.prototype.update = function(delta) 
{
	
	if (this.state == 'standing')
	{
		//console.log('this code runs when I stand');
	}
	else if (this.state == 'running')
	{
	
		//console.log('this code runs when I run');

	}
	else if (this.state == 'jumping')
	{
		console.log('this code runs when I jump');

	}
	// call the MD2Chacter update class. 
	THREE.MD2Character.prototype.update.call(this,delta)
}


CharacterEx.prototype.runTo = function(target)
{
	// empty run command 		

}










































finishStandAnim = function(e) 
			{
				//character.setAnimation('stand');	

			}

CharacterEx.prototype.jump = function()
{
	this.setAnimation('jump');
	var thisCopy = this;
	this.mixer.addEventListener('loop',finishStandAnim);
		

}



function PlayerEx() {
	THREE.MD2Character.call(this);	
	this.speed = 0.01;


		//console.log('udpate being called',delta,this
}

PlayerEx.prototype = Object.create(THREE.MD2Character.prototype);
PlayerEx.prototype.constructor = PlayerEx;
PlayerEx.prototype.update = function(delta) 
{
			
				//THREE.MD2Character.prototype.update.call(this,delta);	
		THREE.MD2Character.update.call(this,delta)
		console.log('udpate being called',delta,this.speed);
}
