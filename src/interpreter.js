export const interpreter = (bfProgram) => {
    let memory = Array.from(Array(30000), (n) => n = 0)
    let pointer = 0;
    let isInLoop = false;
    let loopCount = 0;
    let loopStack = []
    let asciiValues = []



    for(let i = 0; i < bfProgram.length; i++) {

        let command = bfProgram[i]

        if(isInLoop) {
            if(command === "[") {
                loopCount++
                if(command === "]") {
                    if(loopCount === 0) {
                        isInLoop = false
                    }
                } else {
                    loopCount--
                }
            }
            continue
        }


        switch(command) {
            case ">":
                pointer++
                break;
            case "<":
                pointer--
                break;
            case "+":
                memory[pointer]++
                break;
            case "-":
                memory[pointer]--
                break;
            case ".":
                asciiValues.push(memory[pointer])
                break;
            case "," :
                let userInput = prompt("Enter input value: Digit number between 0-255 ==== ")
                memory[pointer] = +userInput.charCodeAt(0)
                break;
            case "[":
                if(memory[pointer] === 0) {
                    isInLoop = true
                } else {
                    loopStack.push(i)
                }
                break;
            case "]":
                if(memory[pointer] !== 0) {
                    i = loopStack[loopStack.length - 1]
                } else {
                    loopStack.pop()
                }
                break;
            default:
                break;
        }

    }


    return asciiValues.map(ascii => String.fromCharCode(ascii)).join("")
}
