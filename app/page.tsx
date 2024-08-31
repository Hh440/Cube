import { Canvas } from "@react-three/fiber";

import dynamic from "next/dynamic";


export default function Home() {

  const Cube = dynamic(()=>import('./component/Cube'),{
  ssr:false
})
  return (
    <main className="h-full">
      <Cube/>
    </main>
  );
}
