import { useEffect, useState } from "react"

type Tasktype ={
    name:string;
    parentcallback: (datafromchild:number)=>void;
}

const Task = ({name,parentcallback}:Tasktype) =>{
    const [count,setCount] = useState<number>(0)

    const btnclick = () =>{
        setCount(count+1)   
    }

    useEffect(()=>{ 
        updateparent()
    },[count])

    const updateparent = () =>{
         parentcallback(count)
        console.log(count)
    }

    return (
        <div>
            <p>this is task , name = {name}, current count = {count}</p>
            <button onClick={btnclick}>child click</button>
        </div>
    )
}

export default Task