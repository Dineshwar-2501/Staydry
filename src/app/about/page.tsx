"use client"

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Aboutpage() {
    const containerRef = useRef(null)
    const parallaxRef = useRef(null)
    const layoutRef = useRef(null)
    const xlayerRef = useRef(null)


    // paralax
    const { scrollYProgress: scrolly2 } = useScroll({     // scroll y progress 0 ->  1
        target: parallaxRef,
        offset: ["start start", "end end"]
    })


    const yslow = useTransform(scrolly2, [0, 1], [0, -300])
    const ymed = useTransform(scrolly2, [0, 1], [0, -600])
    const yfast = useTransform(scrolly2, [0, 1], [0, -900])

    // x axis scroll 

    const { scrollYProgress: scrolly1 } = useScroll({     // scroll y progress 0 ->  1
        target: containerRef,
        offset: ["start start", "end end"]

    })
    // const x1 = useTransform(scrollYProgress, [page start, page on move, page on end], [intial, action , final]) 
    // const x1 = useTransform(scrolly1, [0, 0.1, 0.2], [-800, -400, 0])
    // const y1 = useTransform(scrolly1, [0, 0.1, 0.2], [100, 100, 100])
    // const x2 = useTransform(scrolly1, [0.2, 0.3, 0.4], [-800, -400, 0])
    // const y2 = useTransform(scrolly1, [0.2, 0.3, 0.4], [100, 100, 100])
    // const x3 = useTransform(scrolly1, [0.4, 0.5, 0.6], [-800, -400, 0])
    // const y3 = useTransform(scrolly1, [0.4, 0.5, 0.6], [100, 100, 100])
    // const x4 = useTransform(scrolly1, [0.6, 0.7, 0.8], [-800, -400, 0])
    // const y4 = useTransform(scrolly1, [0.6, 0.7, 0.8], [100, 100, 100])
    // const x5 = useTransform(scrolly1, [0.8, 0.9, 1], [-800, -400, 0])
    // const y5 = useTransform(scrolly1, [0.8, 0.9, 1], [100, 100, 100])

    const y1 = useTransform(scrolly1, [0, 0.1, 0.2], [350, 30, -280])
    const x1 = useTransform(scrolly1, [0, 0.1, 0.2], [100, 100, 100])
    const y2 = useTransform(scrolly1, [0.1, 0.3, 0.4], [350, 30, -280])
    // const x2 = useTransform(scrolly1, [0.2, 0.3, 0.4], [100, 100, 100])
    const y3 = useTransform(scrolly1, [0.3, 0.5, 0.6], [350, 30, -280])
    // const x3 = useTransform(scrolly1, [0.4, 0.5, 0.6], [100, 100, 100])
    const y4 = useTransform(scrolly1, [0.5, 0.7, 0.8], [350, 30, -280])
    // const x4 = useTransform(scrolly1, [0.6, 0.7, 0.8], [100, 100, 100])
    const y5 = useTransform(scrolly1, [0.7, 0.9, 1], [350, 30, -280])
    // const x5 = useTransform(scrolly1, [0.8, 0.9, 1], [100, 100, 100])

    const scale1 = useTransform(scrolly1, [0, 0.1, 0.2], [0.2, 1, 0.2])
    const scale2 = useTransform(scrolly1, [0.1, 0.3, 0.4], [0.2, 1, 0.2])
    const scale3 = useTransform(scrolly1, [0.3, 0.5, 0.6], [0.2, 1, 0.2])
    const scale4 = useTransform(scrolly1, [0.5, 0.7, 0.8], [0.2, 1, 0.2])
    const scale5 = useTransform(scrolly1, [0.7, 0.9, 1], [0.2, 1, 0.2])


    // const rotate1 = useTransform(scrollYProgress, [0, 1], [0, -15])
    // const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -15])
    // const rotate3 = useTransform(scrollYProgress, [0, 1], [0, -15])
    // const rotate4 = useTransform(scrollYProgress, [0, 1], [0, -15])
    // const rotate5 = useTransform(scrollYProgress, [0, 1], [0, -15])


    // layout switching
    const { scrollYProgress: scrolly3 } = useScroll({     // scroll y progress 0 ->  1
        target: layoutRef,
        offset: ["start start", "end end"]

    })

    const width =  useTransform(scrolly3,[0,1],["100%","30%"])


    //x scroll

    const { scrollXProgress: scrollx1 } = useScroll({     // scroll y progress 0 ->  1
        target: layoutRef,
        offset: ["start start", "end end"]

    })

    // const x1 = useTransform(scrollx1, [0, 0.1, 0.2], [-800, -400, 0])
    // const ya = useTransform(scrollx1, [0, 0.1, 0.2], [100, 100, 100])
    // const x2 = useTransform(scrollx1, [0.2, 0.3, 0.4], [-800, -400, 0])
    // const yb = useTransform(scrollx1, [0.2, 0.3, 0.4], [100, 100, 100])
    // const x3 = useTransform(scrollx1, [0.4, 0.5, 0.6], [-800, -400, 0])
    // const yc = useTransform(scrollx1, [0.4, 0.5, 0.6], [100, 100, 100])
    // const x4 = useTransform(scrollx1, [0.6, 0.7, 0.8], [-800, -400, 0])
    // const yd = useTransform(scrollx1, [0.6, 0.7, 0.8], [100, 100, 100])
    // const x5 = useTransform(scrollx1, [0.8, 0.9, 1], [-800, -400, 0])
    // const ye = useTransform(scrollx1, [0.8, 0.9, 1], [100, 100, 100])

    return (

        <>
            {/* <div className="h-screen w-[300vw] overflow-x-scroll p-2 bg-linear-to-b from-indigo-700 via-purple-500 to-pink-500 scroll-auto " ref={xlayerRef}>
                <div className="sticky top-0 h-screen flex items-center justify-center">
                    <motion.div style={{ y: ya,x:x1, scale: scale1 }} className="absolute  right-[35%] top-20 w-105 h-130 rounded-3xl bg-white p-6 shadow-2xl flex flex-col justify-between  z-5">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800">Premium Watch</h2>
                            <p className="text-gray-500 mt-2 text-sm">
                                Minimal stainless steel design.
                            </p>
                        </div>
                        <div>
                            <p className="text-xl font-semibold text-gray-900">$249</p>
                            <button className="mt-4 w-full bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition">
                                1
                            </button>
                        </div>
                    </motion.div>
                    <motion.div style={{ y: yb,x:x2, scale: scale2 }} className="absolute  right-[35%] top-20 w-105 h-130 rounded-3xl bg-white p-6 shadow-2xl flex flex-col justify-between  z-4">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800">Premium Watch</h2>
                            <p className="text-gray-500 mt-2 text-sm">
                                Minimal stainless steel design.
                            </p>
                        </div>
                        <div>
                            <p className="text-xl font-semibold text-gray-900">$249</p>
                            <button className="mt-4 w-full bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition">
                                2
                            </button>
                        </div>
                    </motion.div>
                    <motion.div style={{ y: yc,x:x3, scale: scale3 }} className="absolute  right-[35%] top-20 w-105 h-130 rounded-3xl bg-white p-6 shadow-2xl flex flex-col justify-between  z-3">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800">Premium Watch</h2>
                            <p className="text-gray-500 mt-2 text-sm">
                                Minimal stainless steel design.
                            </p>
                        </div>
                        <div>
                            <p className="text-xl font-semibold text-gray-900">$249</p>
                            <button className="mt-4 w-full bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition">
                                3
                            </button>
                        </div>
                    </motion.div>
                    <motion.div style={{ y: yd,x:x4, scale: scale4 }} className="absolute  right-[35%] top-20 w-105 h-130 rounded-3xl bg-white p-6 shadow-2xl flex flex-col justify-between z-2">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800">Premium Watch</h2>
                            <p className="text-gray-500 mt-2 text-sm">
                                Minimal stainless steel design.
                            </p>
                        </div>
                        <div>
                            <p className="text-xl font-semibold text-gray-900">$249</p>
                            <button className="mt-4 w-full bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition">
                                4
                            </button>
                        </div>
                    </motion.div>
                    <motion.div style={{ y: ye,x:x5, scale: scale5 }} className="absolute  right-[35%] top-20 w-105 h-130 rounded-3xl bg-white p-6 shadow-2xl flex flex-col justify-between z-1">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800">Premium Watch</h2>
                            <p className="text-gray-500 mt-2 text-sm">
                                Minimal stainless steel design.
                            </p>
                        </div>
                        <div>
                            <p className="text-xl font-semibold text-gray-900">$249</p>
                            <button className="mt-4 w-full bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition">
                                5
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div> */}
            
             <div className="h-[300vh] bg-linear-to-b from-neutral-700 via-purple-900 to-cyan-500 scroll-auto" ref={layoutRef}>
                <div className="sticky top-0 h-screen flex items-center justify-center">
                <motion.div style={{ width}} className=" h-40 bg-blue-200" />
                </div>
            </div>

            <div className="h-[300vh] bg-linear-to-b from-lime-400 via-purple-900 to-blue-500 scroll-auto" ref={parallaxRef}>
                <div className="sticky top-0 h-screen flex items-center justify-center">
                    <motion.div style={{ y: yslow }} className="absolute z-0 w-full h-screen  bg-blue-200" />
                    <motion.div style={{ y: ymed}} className="absolute z-10 w-full  h-150 bg-blue-600" />
                    <motion.div style={{ y: yfast }} className="absolute z-20 w-full  h-100 bg-blue-900" />
                </div>
            </div>
            <div className="h-[600vh] p-2 bg-linear-to-b from-indigo-700 via-purple-500 to-pink-500 scroll-auto " ref={containerRef}>
                <div className="sticky top-0 h-screen flex items-center justify-center">
                    <motion.div style={{ y: y1,x:x1, scale: scale1 }} className="absolute  right-[35%] top-20 w-105 h-130 rounded-3xl bg-white p-6 shadow-2xl flex flex-col justify-between  z-5">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800">Premium Watch</h2>
                            <p className="text-gray-500 mt-2 text-sm">
                                Minimal stainless steel design.
                            </p>
                        </div>
                        <div>
                            <p className="text-xl font-semibold text-gray-900">$249</p>
                            <button className="mt-4 w-full bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition">
                                1
                            </button>
                        </div>
                    </motion.div>
                    <motion.div style={{ y: y2,x:x1, scale: scale2 }} className="absolute  right-[35%] top-20 w-105 h-130 rounded-3xl bg-white p-6 shadow-2xl flex flex-col justify-between  z-4">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800">Premium Watch</h2>
                            <p className="text-gray-500 mt-2 text-sm">
                                Minimal stainless steel design.
                            </p>
                        </div>
                        <div>
                            <p className="text-xl font-semibold text-gray-900">$249</p>
                            <button className="mt-4 w-full bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition">
                                2
                            </button>
                        </div>
                    </motion.div>
                    <motion.div style={{ y: y3,x:x1, scale: scale3 }} className="absolute  right-[35%] top-20 w-105 h-130 rounded-3xl bg-white p-6 shadow-2xl flex flex-col justify-between  z-3">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800">Premium Watch</h2>
                            <p className="text-gray-500 mt-2 text-sm">
                                Minimal stainless steel design.
                            </p>
                        </div>
                        <div>
                            <p className="text-xl font-semibold text-gray-900">$249</p>
                            <button className="mt-4 w-full bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition">
                                3
                            </button>
                        </div>
                    </motion.div>
                    <motion.div style={{ y: y4,x:x1, scale: scale4 }} className="absolute  right-[35%] top-20 w-105 h-130 rounded-3xl bg-white p-6 shadow-2xl flex flex-col justify-between z-2">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800">Premium Watch</h2>
                            <p className="text-gray-500 mt-2 text-sm">
                                Minimal stainless steel design.
                            </p>
                        </div>
                        <div>
                            <p className="text-xl font-semibold text-gray-900">$249</p>
                            <button className="mt-4 w-full bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition">
                                4
                            </button>
                        </div>
                    </motion.div>
                    <motion.div style={{ y: y5,x:x1, scale: scale5 }} className="absolute  right-[35%] top-20 w-105 h-130 rounded-3xl bg-white p-6 shadow-2xl flex flex-col justify-between z-1">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800">Premium Watch</h2>
                            <p className="text-gray-500 mt-2 text-sm">
                                Minimal stainless steel design.
                            </p>
                        </div>
                        <div>
                            <p className="text-xl font-semibold text-gray-900">$249</p>
                            <button className="mt-4 w-full bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition">
                                5
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
}