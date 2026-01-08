"use client"
import { useState } from "react";

export default function Count(){
    const [count,setCount]= useState(0);

    // function increment(){
    //     setCount(count++)
    // }
    // function decrement(){
    //     setCount(count--)
    // }
    return (
        <div className="flex items-center gap-10 bg-gray-800/10 px-5 rounded-full">
                    <button className="rounded-full bg-gray-800/20 p-4 px-6" type='button' onClick={()=>setCount(c=>c+1)}>+</button>
                    <p>{count}</p>
                    <button className="rounded-full bg-gray-800/20 p-4 px-6" type='button' onClick={()=>setCount(c=>c-1)}>-</button>
                </div>
    );
}