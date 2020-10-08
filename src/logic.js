const DEFAULT_MIN_NUMBER = 5;
const DEFAULT_MAX_NUMBER = 12; 

function generateCase(minNumber, maxNumber){
    const bulbNum = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
    let bulbArr = [];

    for (let i = 0; i < bulbNum; i++){
        // 0: Bulb Off, 1: Bulb On
        const bulbState = Math.floor(Math.random() * 2);
        bulbArr.push(bulbState);
    }

    // Reject if All On Already!
    for (let currBulb of bulbArr){
        if (currBulb === 0){
            // Good enough as a game!
            return bulbArr;
        }
    }

    return generateCase(minNumber, maxNumber);
}


function countStep(bulbArr){
    let step = 0;

    for(const currBulb of bulbArr){
        // Check bulb state after flipping
        const currState = (currBulb + step) % 2;
        if(currState === 1){
            // Bulb is on
            continue;
        }

        step++;
    }

    return step;
}

export {generateCase, countStep, DEFAULT_MIN_NUMBER, DEFAULT_MAX_NUMBER};