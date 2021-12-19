export const setLevelFunction = (level) => {
    let numberOfSquare;

    if(level === "easy"){
        numberOfSquare = 3
    }
    if(level === "meduim"){
        numberOfSquare = 6
    }
    if(level === "hard"){
        numberOfSquare = 9
    }

    return numberOfSquare
}