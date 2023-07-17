
//import React, { useRef, useState } from 'react'
import React, { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Plane1 } from './Plane'
//import { OrbitControls } from '@react-three/drei'
import { Box2 } from './Box2'
import {useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

// function Box(props) {
//   // This reference will give us direct access to the mesh
//   const meshRef = useRef()
//   // Set up state for the hovered and active state
//   const [hovered, setHover] = useState(false)
//   const [active, setActive] = useState(false)
//   // Subscribe this component to the render-loop, rotate the mesh every frame
//   //useFrame((state, delta) => (meshRef.current.rotation.y += delta))
//   // Return view, these are regular three.js elements expressed in JSX
//   return (
//     <mesh
//       {...props}
//       ref={meshRef}
//       scale={active ? 1.5 : 1}
//       onClick={(event) => setActive(!active)}
//       onPointerOver={(event) => setHover(true)}
//       onPointerOut={(event) => setHover(false)}>
//       <boxGeometry args={[7, 4, .5]} />
//       <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
//     </mesh>
//   )
// }

function App(){
  const [pictSource,pictSourceSet]=useState('hero3.jpg')
  const colorMap = useLoader(TextureLoader, pictSource)
  
  return(
  <Canvas>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    
  {/* <Box position={[1.2, 0, 0]} /> 
  <Box position={[1.2, 0, 2]} />  */}
    <Plane1 position={[0, 0, -2]} map={colorMap} />
    {/* <Plane1 position={[0,-3,2]} />
    <OrbitControls /> */}
    <Box2 position={[5,0,0]} action={(event) => pictSourceSet('hero8.jpg')} />

  </Canvas>
  )
}

export default App;