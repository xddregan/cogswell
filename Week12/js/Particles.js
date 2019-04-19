
function Particle(geometry, material) {
	THREE.Points.call(this,geometry,material);	
	this.mass = 0.01;
	this.velocity = new THREE.Vector3(0.0,5.3,0.21);

	
}


Particle.prototype = Object.create(THREE.Points.prototype);
Particle.prototype.constructor = Particle;

Particle.prototype.update = function(delta) 
{
	var accel = new THREE.Vector3(0,-0.9,0);
			

	accel.multiplyScalar(delta);
	this.velocity.add(accel);	
	var accelVelocity = new THREE.Vector3(0,0,0);
	accelVelocity.copy(this.velocity);
	accelVelocity.multiplyScalar(delta);	
	this.position.add(accelVelocity);		
	//THREE.Points.prototype.update.call(this,delta)
}



function ParticleSystem() {
	THREE.Object3D.call(this);	
}


ParticleSystem.prototype = Object.create(THREE.Object3D.prototype);
ParticleSystem.prototype.constructor = ParticleSystem;
ParticleSystem.prototype.update = function(delta) 
{
	for (var i = 0 ; i < this.children.length ; i++)	
	{
		var object = this.children[i];	
		if ( object instanceof Particle)
		{
			object.update(delta);		
		}

	}
		

}

ParticleSystem.prototype.addParticle = function(particle) 
{
	this.add(particle);	
}




