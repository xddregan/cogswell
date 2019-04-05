
function Particle(geometry, material) {
	THREE.Points.call(this,geometry,material);	

	
}


Particle.prototype = Object.create(THREE.Points.prototype);
Particle.prototype.constructor = Particle;

Particle.prototype.update = function(delta) 
{
	var accel = new THREE.Vector3(0,-0.9,0);
			
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




