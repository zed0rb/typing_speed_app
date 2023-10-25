
//gets data from localStore
export function getData(){
    const localStorageWpm = localStorage.getItem('wpm')
    const localStorageAccu = localStorage.getItem('accuracy')
    const localStorageDate = localStorage.getItem('date')
    let wpmToStore
    let accuToStore
    let dateToStore
    if (localStorage.length === 0) {
        wpmToStore = []
        accuToStore = []
        dateToStore = []
    } else {
        wpmToStore = JSON.parse(localStorageWpm)
        accuToStore = JSON.parse(localStorageAccu)
        dateToStore = JSON.parse(localStorageDate)
    }
    return [wpmToStore, accuToStore, dateToStore]
}

//saves data to localStore
export function saveData(data, wpm, accu, date) {
    const [wpmToStore, accuToStore, dateToStore] = data
    wpmToStore.push(wpm)
    accuToStore.push(accu)
    dateToStore.push(date)

    localStorage.setItem('wpm', JSON.stringify(wpmToStore))
    localStorage.setItem('accuracy', JSON.stringify(accuToStore))
    localStorage.setItem('date', JSON.stringify(dateToStore))
}