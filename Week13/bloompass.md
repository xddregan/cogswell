
```javascript

			var renderScene = new THREE.RenderPass( scene, camera );
			var bloomPass = new THREE.UnrealBloomPass( new THREE.Vector2( window.innerWidth, window.innerHeight ), 1.5, 0.4, 0.85 );
			bloomPass.threshold = params.bloomThreshold;
			bloomPass.strength = params.bloomStrength;
			bloomPass.radius = params.bloomRadius;
			composer = new THREE.EffectComposer( renderer );
			composer.setSize( window.innerWidth, window.innerHeight );
			composer.addPass( renderScene );
			composer.addPass( bloomPass );
```
