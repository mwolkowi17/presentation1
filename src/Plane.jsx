



export function Plane1(props) {

    return (
        <mesh>
            <planeGeometry args={[7, 4]} />
            <meshStandardMaterial map={props.map} />
        </mesh>
    )
}