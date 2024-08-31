'use client'

import { Canvas } from "@react-three/fiber"
import Model from "./Model"
import { Suspense } from "react"
import { Center } from "@react-three/drei"

const Cube = ()=>{
    return(
        <Canvas gl={{antialias:true}} dpr={[1,1.5]}>
            <directionalLight position={[-5,-5,5]} intensity={2}/>
            <Suspense fallback={null}/>
            <Center>
                <Model/>
            </Center>

        </Canvas>
    )
}

export default Cube