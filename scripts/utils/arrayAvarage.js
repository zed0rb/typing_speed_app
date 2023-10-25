// return array average without last item in array
export function arrayAverage(array) {
    return Math.round(array.slice(0, -1).reduce((partialSum, a) => partialSum + a, 0) / (array.length - 1))
}