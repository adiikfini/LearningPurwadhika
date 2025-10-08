/* Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will randomly pick
between rock, paper, or scissor.
a. Example: if you throw a rock as an argument and the function pick a scissor then it will return 'Win' */

function rockPaperScissor(SignHand) {
    /* rule
        1 = paper
        2 = scissor
        3 = rock
    */
    //random 1-3
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    //ubah gerakan tangan ke nomor
    let result = '';
    let signNum = 0;
    let bot = '';
    if (SignHand === 'paper') {
        signNum = 1;
    }else if (SignHand === 'scissor') {
        signNum = 2;
    }else{
        signNum = 3
    }

    if (randomNumber === 1 && signNum === 1) { //paper vs paper
        result = 'Draw';
    }else if (randomNumber === 2 && signNum === 2) { //scissor vs scissor
        result = 'Draw';
    }else if (randomNumber === 3 && signNum === 3) { //rock vs rock
        result = 'Draw';
    }else if (randomNumber === 1 && signNum === 2) { //paper vs scissor
        result = 'Win';
    }else if (randomNumber === 1 && signNum === 3) { //paper vs rock
        result = 'Lose';
    }else if (randomNumber === 2 && signNum === 1) { //scissor vs paper
        result = 'Lose';
    }else if (randomNumber === 2 && signNum === 3) { //scissor vs rock
        result = 'Win';
    }else if (randomNumber === 3 && signNum === 1) { //rock vs paper
        result = 'Win';
    }else if (randomNumber === 3 && signNum === 2) { //rock vs scissor
        result = 'Lose';
    }

    if (randomNumber === 1) {
        bot = 'peper';
    }else if (randomNumber === 2) {
        bot = 'scissor';
    }else{
        bot = 'rock';
    }

    return `Bot = ${bot} \nVS \nPlayer = ${SignHand} \n-> ${result}`
}

console.log(rockPaperScissor('rock'));

