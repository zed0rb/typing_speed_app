//return formatted current date/time
export function currentDate() {
    const currentDate = new Date()
    const f = new Intl.DateTimeFormat('en-lt', {
        dateStyle: 'short',
        timeStyle: 'short'
    })
    return f.format(currentDate)
}