
//import React, { useRef, useState } from 'react'
import React, { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Plane1 } from './Plane'
//import { OrbitControls } from '@react-three/drei'
import { Box2 } from './Box2'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { Suspense } from 'react'
import { imagelist } from './Collection'




function App() {
  let n=0
  const colorMap2 = useLoader(TextureLoader,imagelist[0])
  const colorMap3 = useLoader(TextureLoader,imagelist[1])
 
  const colorMapList = [colorMap2,colorMap3]
  const [pictSource, pictSourceSet] = useState(colorMapList[n])
  //const colorMap = useLoader(TextureLoader, (pictSource ? imagelist[0] : imagelist[1]))
  

  function changePicture(){
    n=n+1;
    pictSourceSet(colorMapList[n])
    console.log(n)
  }

  return (
    <div>
      <Canvas>

        <ambientLight />
        <pointLight position={[10, 10, 10]} />


        <Suspense fallback={<div>Loading... </div>}>
          <Plane1 position={[0, 0, -2]} map={pictSource} />
        </Suspense>

        {/* <Box2 position={[5, 0, 0]} action={(event) => pictSourceSet(colorMapList[1])} /> */}
        <Box2 position={[5, 0, 0]} action={changePicture} />

      </Canvas>
    </div>
  )
}

export default App;