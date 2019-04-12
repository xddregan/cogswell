# Draw textured cube  

## copy latest version and make changes



## We can think of this as 5 distinct parts 

1. Loading the texture
1. Altering shaders to support texture coordinates and a texture sample
1. Creating the texturecoord buffer
1. Setting the texture coord buffer
1. Setting texture sampler so texure is passes to shader


### Before we do this we will need to change the code so it's drawn every frame    
up to this point we have been only drawing it once

#### To do this

- Remove the function call window.onload line and bracket
- also remove the coorsponsing bracket so now the calls 
- next encapusale everything from gl.clearColor to drawElemements in a function called drawScene()

- create a function animate

```javascript

	function animate()
	{
		requestAnimationFrame(animate);
		drawScene();

	}
 
```
-  call animate(); as very last line before drawScene();


### Loading Textures 

```javascript 
// in main section 
//declare a texture up in main section and call initTexture;
// also declare variable texture loaded and set it to false
var myTexture;
var textureLoaded = false;
initTexture();


// place these 2 functions 
function handleLoadedTexture(texture)
{
	console.log("textureloaded "+texture);

	gl.bindTexture(gl.TEXTURE_2D, texture);
	gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,true);
	gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,texture.image);
	gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.NEAREST);
	gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.NEAREST);
	gl.bindTexture(gl.TEXTURE_2D,null);
	textureLoaded = true;
}
function initTexture()
{
	myTexture=gl.createTexture();
	myTexture.image=new Image();
	myTexture.image.onload= function() {
		handleLoadedTexture(myTexture);
	}
	myTexture.image.src="data/brick.png";
}

```

### Modify Shaders 

```javascript 

<script id="shader-vs" type="x-shader/x-vertex">
			attribute vec3 pos; 
			attribute vec4 color; 
			attribute vec2 texcoord; // <----- Here

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			varying vec4 vColor;
			varying vec2 vTextureCoord; // <------ Here 
			void main(void) 
			{
				gl_Position =   projectionMatrix * modelViewMatrix * vec4(pos,1.0);
				vColor = color;
				vTextureCoord = texcoord; // <----- Here

			}
</script>

<script id="shader-fs" type="x-shader/x-fragment">
			precision mediump float;
			varying vec4 vColor;
			varying vec2 vTextureCoord;

			uniform sampler2D textureSampler;


			void main(void) 
			{
				gl_FragColor = texture2D(textureSampler,vTextureCoord); <--- here
			}
</script>

``` 

### create texture coord buffer 
// this is essentially don in initCube from previous 
// we just ignored 


### Setup texture and texcoordBuffers for rendering

```javascript
// changed to drawScene();
// at beginning of drawScene() if textureLoaded is false return 

if (!textureLoaded)
	return;

// before we call drawElement

	gl.activeTexture(gl.TEXTURE0);
	gl.bindTexture(gl.TEXTURE_2D,myTexture);
	gl.uniform1i(textureSamplerLoc,0);

	gl.bindBuffer(gl.ARRAY_BUFFER,cubeVertexTextureCoordBuffer);
	// we may not have captured the location but we get it simplar to locatio of other attributes	
	gl.vertexAttribPointer(textureCoordLocation??,2,gl.FLOAT,false,0,0);

```
    

 
			
				
				 
 


			
		  	




