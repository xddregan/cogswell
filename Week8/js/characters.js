function CharacterEx() {
	THREE.MD2Character.call(this);	
	this.speed = 15.0;
		//console.log('udpate being called',delta,this
}



var funcIndex = 0;
var updateFuncs = new Map();

CharacterEx.prototype = Object.create(THREE.MD2Character);
CharacterEx.prototype.constructor = CharacterEx;
CharacterEx.prototype.update = function(delta) 
{
	THREE.MD2Character.prototype.update.call(this,delta)
	for (var v of updateFuncs.values())
	{
		v(delta);
	}


		
}





CharacterEx.prototype.runTo = function(v)
{

	this.root.lookAt(v);
	var target = v;
	var index = funcIndex++;
	var count = 0;
	var thisCopy = this;
	this.setAnimation('run');
	var moving = false;
	target.y = - this.scale * this.meshBody.geometry.boundingBox.min.y;

	updateFuncs.set(index,function(delta) {
		count++;	
		var distance = thisCopy.root.position.distanceTo(target);
		var direction = new THREE.Vector3(0,0,0);		
		direction.subVectors(target,thisCopy.root.position);
		direction.normalize();
		thisCopy.root.position.add(direction.multiplyScalar(thisCopy.speed * delta));
		////console.log(thisCopy.root.position,direction,thisCopy.speed * delta);
		thisCopy.root.position.y = - thisCopy.scale * thisCopy.meshBody.geometry.boundingBox.min.y;

		if(thisCopy.root.position.distanceTo(target) > distance)
		{
			updateFuncs.delete(index);
			thisCopy.setAnimation('stand');
		}
	});
}



CharacterEx.prototype.jump = function()
{
	this.setAnimation('jump');


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
