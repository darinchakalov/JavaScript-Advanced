function solve(n, k) {
    let result = [1]
    
    for (let i = 0; i < n-1; i++) {
        let current = 0;
        for (let j = 0; j < k; j++) {
            if (result[i-j] !== undefined) {
                current += result[i-j]  
            }        
        }
        result.push(current)
    }
    return result
}
solve([8,2])