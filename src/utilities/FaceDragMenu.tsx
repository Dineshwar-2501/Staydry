"use client"

import { motion, MotionConfig } from "framer-motion"
import { useEffect, useRef, useState } from "react"
type DragMenuProps = {
  screenRef: React.RefObject<HTMLDivElement | null>
}
export default function FaceDragMenu({ screenRef }: DragMenuProps) {

  const[drag,setDrag] =useState(false)

  const mouse = useRef({ x: 0, y: 0 })
  

  const eye1Ref = useRef<HTMLDivElement>(null)
  const eye2Ref = useRef<HTMLDivElement>(null)

  // const screenRef = useRef<HTMLDivElement>(null)

  const moveEye = (eye: HTMLDivElement | null) => {
    if (!eye) return

    const rect = eye.getBoundingClientRect()

    const eyeX = rect.left + rect.width / 2
    const eyeY = rect.top + rect.height / 2

    const dx = mouse.current.x - eyeX
    const dy = mouse.current.y - eyeY

    const angle = Math.atan2(dy, dx)

    const radius = 4

    const x = Math.cos(angle) * radius
    const y = Math.sin(angle) * radius

    eye.style.transform = `translate(${x}px, ${y}px)`
  }

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {

      mouse.current = { x: e.clientX, y: e.clientY }

      moveEye(eye1Ref.current)
      moveEye(eye2Ref.current)

    }

    window.addEventListener("mousemove", handleMove)

    return () => window.removeEventListener("mousemove", handleMove)

  }, [])

  return (
    // <div ref={screenRef} className="relative w-screen h-screen">

    <motion.div
      drag
      dragConstraints={screenRef}
      onDragEnd={()=>setDrag(false)}
      onDragStart={()=>setDrag(true)}
      
      
      dragElastic={0.1}
      dragMomentum={true}
      className="absolute bg-gray-600 z-10 px-4 py-3 rounded-full cursor-grab active:cursor-grabbing"

    >

      <div className="flex flex-col items-center">

        {/* Eyes */}
        <div className="flex gap-2">

          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
            <div ref={eye1Ref} className="w-4 h-4 bg-black rounded-full" />
          </div>

          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
            <div ref={eye2Ref} className="w-4 h-4 bg-black rounded-full" />
          </div>

        </div>

        {/* Smile */}
        <svg
          viewBox="0 5 24 24"
          className="h-10 w-fit"
        >
          <path
            d="M9 16C9.85 16.63 10.88 17 12 17C13.11 17 14.15 16.63 15 16"
            stroke="black"
            strokeWidth={`${drag? '10' : '2'}`}
            strokeLinecap="round"
          />
        </svg>

      </div>

    </motion.div>

    // </div>
  )
}