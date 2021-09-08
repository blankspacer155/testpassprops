import { useState } from "react"
import Task from "./Task"



const Todolist = () => {

    const [fromchild,setfromchild] = useState<number | null>(null)

    const myCallback=(datafromchild:number)=>{
            setfromchild(datafromchild)
            console.log("callback complete call in todolist")
    }

    return (
        <div>
            <p>this is todolist, number from child = {fromchild}</p>
            <Task name='Mon' parentcallback={myCallback}></Task>
        </div>
    )
}

export default Todolist