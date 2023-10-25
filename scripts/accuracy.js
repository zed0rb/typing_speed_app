export function accuracy(typedCharacters, mistakes) {
    return Math.round ((typedCharacters - mistakes) / typedCharacters * 100)
}