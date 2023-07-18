
//import React, { useRef, useState } from 'react'
import React, { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Plane1 } from './Plane'
//import { OrbitControls } from '@react-three/drei'
import { Box2 } from './Box2'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { Suspense } from 'react'



function App() {
  const [pictSource, pictSourceSet] = useState(true)
  const colorMap = useLoader(TextureLoader, (pictSource ? 'hero3.jpg' : 'hero8.jpg'))



  return (
    <div>
      <Canvas>

        <ambientLight />
        <pointLight position={[10, 10, 10]} />


        <Suspense fallback={<div>Loading... </div>}>
          <Plane1 position={[0, 0, -2]} map={colorMap} />
        </Suspense>

        <Box2 position={[5, 0, 0]} action={(event) => pictSourceSet(!pictSource)} />

      </Canvas>
    </div>
  )
}

export default App;