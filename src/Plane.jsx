import {useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'



export function Plane1() {
    const colorMap = useLoader(TextureLoader, 'hero3.jpg')
    return (
        <mesh>
            <planeGeometry args={[7, 4]} />
            <meshStandardMaterial map={colorMap} />
        </mesh>
    )
}