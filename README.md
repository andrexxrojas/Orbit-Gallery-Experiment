# Orbit Gallery

A dynamic, interactive **orbit-style image gallery** built with **React** and **GSAP**. Images smoothly rotate around a central point in a circular path, and you can dynamically **add or remove images** while keeping the spacing evenly distributed.

<video loop src="demo.mp4">Demo Video</video>

## Features

- Smooth **circular rotation** of images using GSAP.
- **Dynamic spacing**: images automatically reposition evenly when added or removed.
- Images **stay upright** (no rotation applied to the images themselves).
- **Depth effect** using `z-index` to simulate layering of images along the orbit.
- Simple **Add** and **Remove** buttons to dynamically update the gallery.
- Fully built with **React functional components** and **hooks**.

## Demo

- Images orbit continuously around the center.
- The bottom-most images appear above others using dynamic `z-index`.
- Adding or removing images recalculates positions automatically.