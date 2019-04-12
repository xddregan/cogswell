# Draw  cube and add camera matrix 

## copy latest version and make changes




 
## functions a variables to make cube data


### Part 1 is 
	- draw the cube with colored verts see helper data function at below
	- get the cube spinning    
	- you look in js/glMatrix.0.9.5.js you will see the mat4 and vec3 functions
	- add a camera   
	-	to add use mat4.lookAt(eye,center,up, dest);
			eye is vec3   
			center is vec3   
			up is vec3  
			dest is mat4
		- example
			- var cameraMatrix = mat4.create();   
			- mat4.lookAt([0.0,4.0,-5], [0.0,0.0,0.0],[0.0,1.0,0.0],cameraMatrix); 
			- we also make a modelMatrix which positions the model
			- then at draw time 
			- update the modelMatrix to the current postion of object (cube)

 to draw an object we have to add/change the follow 
```javascript 
			
			// once per frame
			var cameraMatrix = mat4.create();   
			mat4.lookAt([0.0,4.0,-5], [0.0,0.0,0.0],[0.0,1.0,0.0],cameraMatrix); 

			//per object
			var modelMatrix = mat4.create();
			mat4.translate(modelMatrix,[2.0,1.0,0.0]);
			// instead of translating we should do rotation here
			// combine these to create the modelViewMatrix 
			mat4.multiply(modelMatrix,cameraMatrix,modelViewMatrix);		

```

 
			
				
				 
 


			
		  	




###Here is helper data to make the cube

```javascript

var cubeVertexPositionBuffer;
var cubeVertexColorBuffer;
var cubeVertexIndicesBuffer;
var cubeVertexTextureCoordBuffer;

function initBuffer()
{
	cubeVertexPositionBuffer=gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER,cubeVertexPositionBuffer);
	vertices = [
			// Front face
			-1.0, -1.0,  1.0,
			 1.0, -1.0,  1.0,
			 1.0,  1.0,  1.0,
			-1.0,  1.0,  1.0,

			// Back face
			-1.0, -1.0, -1.0,
			-1.0,  1.0, -1.0,
			 1.0,  1.0, -1.0,
			 1.0, -1.0, -1.0,

			// Top face
			-1.0,  1.0, -1.0,
			-1.0,  1.0,  1.0,
			 1.0,  1.0,  1.0,
			 1.0,  1.0, -1.0,

			// Bottom face
			-1.0, -1.0, -1.0,
			 1.0, -1.0, -1.0,
			 1.0, -1.0,  1.0,
			-1.0, -1.0,  1.0,

			// Right face
			 1.0, -1.0, -1.0,
			 1.0,  1.0, -1.0,
			 1.0,  1.0,  1.0,
			 1.0, -1.0,  1.0,

			// Left face
			-1.0, -1.0, -1.0,
			-1.0, -1.0,  1.0,
			-1.0,  1.0,  1.0,
			-1.0,  1.0, -1.0
		];
	gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(vertices),gl.STATIC_DRAW);
	// note he attaches extra properties to teh buffer so they can get tracked with the buffer
	cubeVertexPositionBuffer.itemSize=3;
	cubeVertexPositionBuffer.numItems=24;


	cubeVertexColorBuffer=gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER,cubeVertexColorBuffer);
	var colors=[
			[1.0, 0.0, 0.0, 1.0], // Front face
			[1.0, 1.0, 0.0, 1.0], // Back face
			[0.0, 1.0, 0.0, 1.0], // Top face
			[1.0, 0.5, 0.5, 1.0], // Bottom face
			[1.0, 0.0, 1.0, 1.0], // Right face
			[0.0, 0.0, 1.0, 1.0]  // Left face
	];
	var unpackedColors=[];
	for (var i in colors) {
		var color=colors[i];
		for(var j=0;j<4 ; j++)
		{
			unpackedColors=unpackedColors.concat(color);
		}
	}
	gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(unpackedColors),gl.STATIC_DRAW);
	cubeVertexColorBuffer.itemSize=4;
	cubeVertexColorBuffer.numItems=24;

	cubeVertexIndicesBuffer=gl.createBuffer();
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,cubeVertexIndicesBuffer);
	var cubeVertexIndices=[
	0,1,2, 0,2,3,
	4,5,6, 4,6,7,
	8,9,10, 8,10,11,
	12,13,14, 12,14,15,
	16,17,18, 16,18,19,
	20,21,22, 20,22,23
	]
	gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,new Uint16Array(cubeVertexIndices),gl.STATIC_DRAW);
	cubeVertexIndicesBuffer.itemSize=1;
	cubeVertexIndicesBuffer.numItems=36;


	cubeVertexTextureCoordBuffer=gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER,cubeVertexTextureCoordBuffer);
	var textureCoords = [
		  // Front face
		  0.0, 0.0,
		  1.0, 0.0,
		  1.0, 1.0,
		  0.0, 1.0,

		  // Back face
		  1.0, 0.0,
		  1.0, 1.0,
		  0.0, 1.0,
		  0.0, 0.0,

		  // Top face
		  0.0, 1.0,
		  0.0, 0.0,
		  1.0, 0.0,
		  1.0, 1.0,

		  // Bottom face
		  1.0, 1.0,
		  0.0, 1.0,
		  0.0, 0.0,
		  1.0, 0.0,

		  // Right face
		  1.0, 0.0,
		  1.0, 1.0,
		  0.0, 1.0,
		  0.0, 0.0,

		  // Left face
		  0.0, 0.0,
		  1.0, 0.0,
		  1.0, 1.0,
		  0.0, 1.0,
		];
	gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(textureCoords),gl.STATIC_DRAW);
	cubeVertexTextureCoordBuffer.itemSize=2;
	cubeVertexTextureCoordBuffer.numItems=24;

}

```

