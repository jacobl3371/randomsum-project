const randomSum = async () => {
    const VITE_BACKEND_API_URL = import.meta.env.VITE_BACKEND_API_URL

    const sum1 = await fetch(`${VITE_BACKEND_API_URL}/sum1`)
    const sum2 = await fetch(`${VITE_BACKEND_API_URL}/sum2`)
    const sumsone = await sum1.json();
    const sumstwo = await sum2.json();

    const problem = "Problem: " + sumsone.randomSum1 + " + " + sumstwo.randomSum2
    const solution = "Solution: " + eval(sumsone.randomSum1 + sumstwo.randomSum2)

    return {problem, solution}
}

export default randomSum