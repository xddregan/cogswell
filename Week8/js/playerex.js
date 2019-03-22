function CharacterEx() {
	THREE.MD2Character.call(this);	


		//console.log('udpate being called',delta,this
}

CharacterEx.prototype = Object.create(THREE.MD2Character);
CharacterEx.prototype.constructor = CharacterEx;
CharacterEx.prototype.update = function(delta) 
{
				
					//THREE.MD2Character.prototype.update.call(this,delta);	
	console.log('udpate being called',delta,this.speed);
	THREE.MD2Character.prototype.update.call(this,delta)
	console.log( typeof THREE.MD2Character.prototype.update)
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
