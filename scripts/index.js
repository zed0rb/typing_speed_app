import {getData, saveData} from "./localData.js"
import  {checkWpm, checkAccu} from "./checkTypingSkills.js"
import {currentDate} from "./utils/currentDate.js"
import {buildTable} from "./utils/drawTable.js"
import {renderNewQuote} from "./getText.js"
import {wpm} from "./wordsPerMinute.js"
import {accuracy} from "./accuracy.js"

const quoteDisplayElement = document.getElementById('quoteDisplay')
const quoteInputElement = document.getElementById('quoteInput')
const timerElement = document.getElementById('timer')
const modalCloseBtn = document.querySelector('.modalBtn')
const resetBtn = document.querySelector('.resetBtn')
const introModal = document.querySelector('#intro')
const resultModal = document.querySelector('#result')
const wpmText = document.querySelector('#wpm p')
const accuText = document.querySelector('#accuracy p')
const resultBtn = document.querySelector('#resultBtn')
//set typing time
const gameTime = 60
window.timer = null
window.gameStart = null

let mistakes = 0
let typedCharacters = 0
let charIndex = 0

//show intro modal when load
window.onload = function () {
    introModal.showModal()
}

modalCloseBtn.addEventListener('click', () => {
    introModal.close()
})

//event listener for esc to restart game
quoteInputElement.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        newGame()
    }
})

resetBtn.addEventListener('click', newGame)
newGame()

function initTyping() {
    const characters = quoteDisplayElement.querySelectorAll('span')
    const typedChar = quoteInputElement.value.split('')[charIndex]
    startTimer()

    if (typedChar == null) {
        charIndex--
        characters[charIndex].classList.remove('correct', 'incorrect')
    } else {
        if (typedChar === characters[charIndex].innerText) {
            characters[charIndex].classList.add('correct')
            characters[charIndex].classList.remove('incorrect')
        } else {
            mistakes++
            characters[charIndex].classList.remove('correct')
            characters[charIndex].classList.add('incorrect')
            }
        charIndex++
        }
    typedCharacters++

    //render new quote when first fully typed
    if (characters.length === charIndex) {
        charIndex = 0
        // reset input field
        quoteInputElement.value = null
        renderNewQuote(quoteDisplayElement)
    }
}

function startTimer() {
  if (!window.timer) {
    window.timer = setInterval(() => {
      if (!window.gameStart) {
          window.gameStart = (new Date()).getTime()
      }
      const currentTime = (new Date()).getTime()
      const msPassed = currentTime - window.gameStart
      const sPassed = Math.round(msPassed / 1000)
      const sLeft = Math.round(gameTime  - sPassed)
      timerElement.innerHTML = sLeft + '';
      // if time 0, game over
      (sLeft <= 0) && gameOver()
    }, 1000)
  }
}

function newGame() {
    clearInterval(window.timer)
    timerElement.innerHTML = ''
    window.timer = null
    window.gameStart = null
    mistakes = typedCharacters = charIndex = 0
    //reset input field
    quoteInputElement.value = null
    // focus input field
    document.addEventListener("keydown", () => quoteInputElement.focus())
    renderNewQuote(quoteDisplayElement).then(r =>
        quoteInputElement.addEventListener('input', initTyping))
}

function gameOver() {
    clearInterval(window.timer)
    timerElement.innerHTML = ' '
    saveData(getData(), wpm(typedCharacters, mistakes, gameTime), accuracy(typedCharacters, mistakes), currentDate())
    const [wpmArray, accuArray, dateArray] = getData()
    wpmText.innerHTML = checkWpm(wpmArray)
    accuText.innerHTML = checkAccu(accuArray)
    buildTable(wpmArray, accuArray, dateArray)
    resultModal.showModal()
    resultBtn.addEventListener('click', () => {
        resultModal.close()
        newGame()
    })
}