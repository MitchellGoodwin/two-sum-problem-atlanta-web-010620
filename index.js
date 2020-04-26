function bruteForceTwoSum(array, sum) {
    let result = []
    while (array.length != 0) {
        let num1 = array.shift()
        array.forEach(num2 => {
            if (num1 + num2 === sum) {
                result.push([num1, num2])
            }
        })
    }
    return result
}

function binarySearchTwoSum(array, sum) {
    let result = []
    array = array.sort((a, b) => a - b)
    while (array.length != 0) {
        let num1 = array.shift()
        let goal = sum - num1
        if (array.includes(goal)) {
            result.push([num1, goal])
        }
    }
    return result
}

function binaryMatch(array, target) {
    if (array.length === 1) {
        console.log(array)
        if (array[0] === target) {
            return true
        } else {
            return false
        }
    }
    let midpoint = parseInt(array.length/2)
    if (array[midpoint] === target) {
        return true
    } else if (array[midpoint] < target) {
        let secondHalf = array.slice(midpoint, array.length)
        return binaryMatch(secondHalf, target)
    } else {
        let firstHalf = array.slice(0, midpoint)
        return binaryMatch(firstHalf, target)
    }
}

function hashTwoSum(array, target) {
    let hash = {}
    let result = []
    array.forEach(num => {
        hash[num] = num
    })
    while (array.length > 0) {
        let num = array.shift()
        let goal = target - num
        if (hash[goal]) {
            result.push([num, goal])
            hash[num] = false
        }
    }
    return result
}