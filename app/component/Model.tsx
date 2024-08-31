
'use client'

import { useAnimations, useGLTF, useMotion } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { useRef } from "react"
import { AnimationAction, Group, MathUtils } from "three"


const Model = ()=>{

    useGLTF("/medias/Cube.glb")

    const motionVal = useMotionValue(0)
    const spring = useSpring(motionVal,{stiffness:20})

    const group = useRef<Group>(null)


    useFrame(({camera})=>{
        group.current?.rotateY(MathUtils.degToRad(0.2))
        Object.keys(actions).forEach((key)=>{
            const action =actions[key] as AnimationAction
            action.play().paused=true
            action.time=spring.get()
        })

    })

    const {nodes,animations,scene} = useGLTF('/medias/Cube.glb')
    const  {actions}= useAnimations(animations,scene)
    return (
        
        <group 

        onPointerUp={()=>motionVal.set(0)}
        onPointerDown={()=>motionVal.set(0.77)}  
        ref={group} >
            <primitive object={scene}/>
        </group>
    )
}

export default Model