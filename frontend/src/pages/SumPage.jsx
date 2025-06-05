import { useState } from "react"
import  randomSum from "../randomSum"
import { useEffect } from "react";

export default function SumPage() {
    const [problem, setProblem] = useState("loading");
    const [solution, setSolution] = useState("loading");

    const getRandomSum = async () => {
        const data = await randomSum()
        console.log(data)
        setProblem(data.problem)
        setSolution(data.solution)
    }
    
    useEffect(() => {
        getRandomSum()
        
    }, [])

    return (
        <div>
            <h1>{problem}</h1>
            <h1>{solution}</h1>
        </div>
    )
}