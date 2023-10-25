const RANDOM_QUOTE_API_URL = 'http://api.quotable.io/random'

function getRandomQuote() {
    return fetch(RANDOM_QUOTE_API_URL)
        .then(response => response.json())
        .then(data => data.content)
}

export async function renderNewQuote(element) {
    const quote = await getRandomQuote()
    element.innerHTML = ''
    quote.split('').forEach(character => {
        const characterSpan = `<span>${character}</span>`
        element.innerHTML += characterSpan
    })
}