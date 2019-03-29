
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
		var distance = this.root.position.distanceTo(this.currentTarget);
		var direction = new THREE.Vector3(0,0,0);		
		direction.subVectors(this.currentTarget,this.root.position);
		direction.normalize();
		this.root.position.add(direction.multiplyScalar(this.speed * delta));
		////console.log(thisCopy.root.position,direction,thisCopy.speed * delta);
		this.root.position.y = - this.scale * this.meshBody.geometry.boundingBox.min.y;

		if(this.root.position.distanceTo(this.currentTarget) > distance)
		{
			this.state = 'standing';
			this.setAnimation('stand');
		}
		else if (this.root.position.distanceTo(getBox().position) < 4)
		{
			console.log('this code means i am close to BOX');
			this.state = 'jumping';
			this.setAnimation('jump');

			this.jumpTime = 0.3;

		}

	}
	else if (this.state == 'jumping')
	{
		console.log('this code runs when I jump');
		var distance = this.root.position.distanceTo(this.currentTarget);
		var direction = new THREE.Vector3(0,0,0);		
		direction.subVectors(this.currentTarget,this.root.position);
		direction.normalize();
		this.root.position.add(direction.multiplyScalar(this.speed * delta));
		////console.log(thisCopy.root.position,direction,thisCopy.speed * delta);
		this.root.position.y = - this.scale * this.meshBody.geometry.boundingBox.min.y +2;
		this.jumpTime -= delta;
		if (this.jumpTime < 0)
		{
			this.state = 'running';	
			this.setAnimation('run');
		}

	}

	THREE.MD2Character.prototype.update.call(this,delta)
}


CharacterEx.prototype.runTo = function(target)
{
	this.state = 'running';
	this.root.lookAt(target);
	this.setAnimation('run');
	target.y = - this.scale * this.meshBody.geometry.boundingBox.min.y;
	this.currentTarget = target;
}











CharacterEx.prototype.runTo1 = function(v)
{

	var target = v;
	var index = funcIndex++;
	var count = 0;
	var thisCopy = this;
	this.setAnimation('run');
	var moving = false;
	target.y = - this.scale * this.meshBody.geometry.boundingBox.min.y;
	this.currentTarget = target;

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
