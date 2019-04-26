
## How to convert existing scene to vr
<script src="js/vr/WebVR.js"></script>

- Initially disable controls


```javascript
//controls = new THREE.OrbitControls(camera);
//controls.target = new THREE.Vector3(0,1.5,0);
```


- Enable vr rendering
		renderer.vr.enabled = true;

- Break up animate function as we can no longer use request animation frame

```javascript
		function render()
			{
				var delta = clock.getDelta();
				//controls.update();
				particleSystem.update(delta);
				updateBoxPos();
							//CharacterEx.update.call(character,delta);
				character.update(delta);
				renderer.render( scene, camera ); 
			}


			function animate() { 
					renderer.setAnimationLoop(render);	

						}
```
