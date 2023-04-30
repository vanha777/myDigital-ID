---
title: Building Your Own 3D World in React Applications :Simplified with Three.js Engine.
date: 2022-04-09
author: Văn Jiro
desc: This article simplifies creating a 3D world in React using three.js. Import react-three/fiber, create shapes or import 3D models, add controls and animations.
img: /threeJsBlog/threeLogo.png
imgWidth: 800
imgHeight: 500
---

Creating a 3D world in React applications can be a daunting task, especially for beginners. There are numerous instructions and resources available on the internet, but none of them are easily digestible. In this article, we aim to simplify the process of using the three.js engine in React applications.

<img src="/threeJsBlog/three2.jpg" alt="react-three/fiber" />

To begin with, it's important to understand that our goal is to create a 3-dimensional world that can contain anything from a city to a humanoid model and interact with that world through our React applications. Similar to web apps needing a Node engine, we also need a game engine software/WebGL engine for a 3-dimensional world, and in this case, we will be using the three.js engine.

The first step is to import the react-three/fiber model into your React applications. Then use React-three/fiber to render a React 3D component. Under the hood, the three.js engine will run and create a 3D world according to your react-three/fiber script.

<div class="mockup-code">
  <pre data-prefix="$">
  <code>npm install three @types/three @react-three/fiber</code>
  <code >installing...</code>
  <code>Done!</code>
  </pre> 
</div>

<div class="mockup-code">
  <pre data-prefix="//"><code>//This Is Inside Your React Component</code></pre>
</div>


<img src="/threeJsBlog/canvasCode.jpg" alt="react-three/fiber" />

<div class="mockup-code">
  <pre data-prefix="//">
    <code>
    //Next On Your Terminal we need to install react-three drei,
    //in order to turn on the lighting of your world and adjust camera angles
    //like normal world without light we won't able to see nothings 
    </code>
</pre>
</div>

<div class="mockup-code">
  <pre data-prefix="$">
  <code>npm install three @types/three @react-three/fiber</code>
  <code >installing...</code>
  <code>Done!</code>
  </pre> 
</div>

<img src="/threeJsBlog/canvas2.jpg" alt="react-three/fiber" />

<div class="mockup-code">
  <pre data-prefix="//">
  <code>
  //mesh Component is just an example of a 3d box
  //Now you should able to see a 3d Box in your project,
  //With light and free Orbit Control, you can spin the object around freely
  </code>
  </pre>
</div

Next, you can either create shapes or forms and color them, add textures to make them look more realistic, or import 3D models from websites like Sketchfab. Download a free 3D model and start importing them into your applications by using react-three/fiber or react-three/drei. While this requires some playtime and learning, you can always read more resources and copy the syntax to apply accordingly.

<a href="https://sketchfab.com/3d-models/popular" class="link link-info">Sketchfab 3D models for free</a>

The procedure has already been demonstrated on the Library Doc, so I won't get into details, but there are numerous methods. Please choose carefully and copy accordingly.

<a href="https://docs.pmnd.rs/react-three-fiber/tutorials/loading-models" class="link link-warning">Loading GLTF models as JSX Components</a>

I personally recommend sticking with loading GLTF models as JSX components. Again, please follow the resource link procedure precisely.

<img src="/threeJsBlog/gltf1.jpg" alt="react-three/fiber" />

<img src="/threeJsBlog/gltf2.jpg" alt="react-three/fiber" />


It's important to remember not to get too overwhelmed. Different file types of 3D models like gltf, glb, Obj, etc., have different file structures and will require different ways of importing them. So make sure to read the resources carefully and copy accordingly.

After importing your 3D model, you can add controlling, animations, and interactions with your 3D world through your React applications. This can take some time and effort, but the results are worth it.

<a href="https://docs.pmnd.rs/react-three-fiber/tutorials/basic-animations" class="link link-warning">Basic Animations</a>

The procedures have already been very well documented on their resource documentation. Please choose carefully and copy accordingly.

<div class="mockup-code">
  <pre data-prefix="//">
  <code>
  //Attention! To animate certain humanoid model actions, such as the one downloaded from Sketchfab.The model needs to be rigged. 
  //This involves adding bones and creating animations before exporting it as an embedded glb file
  //Which can then be imported back into React as a JSX component. More details on this process will be covered in the next blog.  
  </code>
  </pre>
</div>

<a href="" class="link link-warning">Animations For Custom Models</a>

In conclusion, using the three.js engine in React applications to create a 3D world may seem daunting, but with some research and practice, it can be achieved. Remember to take it step-by-step, read resources carefully, and don't be afraid to experiment. Happy coding!

Below is my Ironman Chatbot !

<img src="/threeJsBlog/gltfExample.jpg" alt="react-three/fiber" />