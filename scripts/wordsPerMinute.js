export function wpm(typedCharacters, mistakes, gameTime) {
    let wpm = Math.round(((typedCharacters / 5 - mistakes) / gameTime) * 60 )
    return wpm <= 0 ? 0 : wpm
}