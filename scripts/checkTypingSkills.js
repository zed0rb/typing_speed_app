import {arrayAverage} from "./utils/arrayAvarage.js"

// checks if user improved his wpm or not
export function checkWpm(wpmArray) {
    const wpmCurrentScore = wpmArray[wpmArray.length - 1]
    const wpmAverage =  arrayAverage(wpmArray)
    if (!Number.isNaN(wpmAverage)) {
         if (wpmCurrentScore > wpmAverage) {
        return `Your <b>WPM score ${wpmCurrentScore}</b> and average score ${wpmAverage}. You improved this skill!`
         } else {
             return `Your <b>WPN score ${wpmCurrentScore}</b> and average score ${wpmAverage}. Try to do better`
         }
    } else {
        return `<b>${wpmCurrentScore} WPM<b/>`
    }
}

// checks if user improved his accuracy or not
export function checkAccu(accuArray) {
    const accuCurrentScore = accuArray[accuArray.length - 1]
    const accuAverage = arrayAverage(accuArray)
    if (!Number.isNaN(accuAverage)) {
        if (accuCurrentScore > accuAverage) {
             return `Your <b>Accuracy score ${accuCurrentScore}%</b> and average score ${accuAverage}%. You improved this skill!`
        } else {
            return `Your <b>Accuracy score ${accuCurrentScore}%</b> and average score ${accuAverage}%. Try to do better`
        }
    } else {
       return `<b>${accuCurrentScore}%<b/>`
    }
}