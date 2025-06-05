const randomSum = async () => {
    const sum1 = await fetch(`http://localhost:3000/api/sum1`)
    const sum2 = await fetch(`http://localhost:3000/api/sum2`)
    const sumsone = await sum1.json();
    const sumstwo = await sum2.json();

    const problem = "Problem: " + sumsone.randomSum1 + " + " + sumstwo.randomSum2
    const solution = "Solution: " + eval(sumsone.randomSum1 + sumstwo.randomSum2)

    return {problem, solution}
}

export default randomSum