# Modify webgl_simple_vert_colors.html and modify program to have perspectiveMatrx and modelViewMatrix 

## copy webgl_simple_vert_colors.html to webgl_simple_index_buffer.html
## make changes in the new file 



## Part 1 Use and index buffer to draw triangles instead of 

## add an index buffer but bind it to gl_ELEMENT_ARRAY_BUFFER instead of gl_ARRAY_BUFFER 

Create and index buffer  // 
```javascript 

		var indexBuffer = gl.createBuffer();

		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,indexBuffer);
		var indices = [
			0,1,2,
			0,2,3];

		gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,new Uint16Array(indices),gl.STATIC_DRAW); 
```

Next reduce the number of Vertices and colors to 4, since we are using indices we don't need duplicates  

Now istead of using drawArray we call gl.drawElements 


```javascript

		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,indexBuffer);
		gl.drawElements(gl.TRIANGLES,6,gl.UNSIGNED_SHORT,0);

```



### Part 2 add a perspective and modelview matrix so we can move object and see it in 3d

Add matrices

Include a matrix library
<script type="text/javascript" src="js/glMatrix.0.9.5.min.js"></script>

Update the shader

```javascript 

<script id="shader-vs" type="x-shader/x-vertex">
			attribute vec3 pos; 
			attribute vec4 color; 

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			varying vec4 vColor;
			void main(void) 
			{
				gl_Position =   projectionMatrix * modelViewMatrix * vec4(pos,1.0);
				vColor = color;
			}
</script>

```


Then right after gl.Clear call add the following

```javascript 

		gl.viewport(0,0,gl.viewportWidth,gl.viewportHeight );
		var perspectiveMatrixLoc = gl.getUniformLocation(program,"projectionMatrix"); 
		var modelViewMatrixLoc = gl.getUniformLocation(program,"modelViewMatrix"); 

		var modelViewMatrix = mat4.create();			
		var projectionMatrix = mat4.create();			

		mat4.perspective(45,gl.viewportWidth/gl.viewportHeight,0.1,100.0,projectionMatrix);

		mat4.identity(modelViewMatrix);
		mat4.translate(modelViewMatrix,[0.0,0.0,-7.0]);


		gl.uniformMatrix4fv(modelViewMatrixLoc,false,modelViewMatrix);
		gl.uniformMatrix4fv(perspectiveMatrixLoc,false,projectionMatrix);

```
Check that you see something like

![Like this](./data/poly.png)




