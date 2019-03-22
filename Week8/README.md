



## Helper items for Mid Term Exam



- Setting the orbital camera to position of 50,20,-10 at beginning helps with construction

- To create a Cyclinder you can use new THREE.CylinderGeometry( 1, 1, 20, 32 ); 
[CylinderGeometry help in three documentation ](https://threejs.org/docs/#api/en/geometries/CylinderGeometry)  


- KeyCodes 
- A 65
- S 8
- Y 89
- U 85

[KeyCodes](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode)

- You can use object.translateX(0.4) to move an object by 4 along x axis
- There are also  translateY and translateZ functions
- NOTE when using these the axis may have changed if you rotated the object
-    Easy to determine what you need by trying it
[translateX doc](https://threejs.org/docs/#api/en/core/Object3D.translateX)


- Collision detection howto
	- you will need to create a CheckCollisions function that is called every frame
	- in that you can do the respective collisons
	- to detect collision between two objects you will need do something similar to following code
	- NOTE. It'very important that you update this code each frame as the Box3's will invalid next frame

```javascript

	// this is function to check collision between two objects object1 and object2



		function checkCollision(object1 , object2)
		{
		
			var object1Box = new THREE.Box3(); // create a new box
			object1Box.setFromObject(object1);  // update the from the object so it's got right position and size

			var object2Box = new THREE.Box3(); // same for second object
			object2Box.setFromObject(object2);

			if (object1Box.intersectsBox(object2Box))  // now check if the two boxes are colliding
			{
				console.log("object1 is intersecting object2");
				// handle collisions here
				return true;
			}
			else
			{
				return false;

			}


		}


```


