
function Particle(geometry, material) {
	THREE.Points.call(this,geometry,material);	
}


Particle.prototype = Object.create(THREE.Points.prototype);
Particle.prototype.constructor = Particle;

Particle.prototype.update = function(delta) 
{
	
	THREE.Points.prototype.update.call(this,delta)
}



function ParticleSystem() {
	THREE.Object3D.call(this);	
}


ParticleSystem.prototype = Object.create(THREE.Object3D.prototype);
ParticleSystem.prototype.constructor = ParticleSystem;
ParticleSystem.prototype.update = function(delta) 
{
	
	//THREE.Object.prototype.update.call(this,delta)
}





