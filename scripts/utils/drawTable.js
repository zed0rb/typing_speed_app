export function buildTable(wpmArray, accuArray, dateArray){
    const table = document.getElementById('myTable')
    table.innerHTML = ''
    for (let i = 0; i < wpmArray.length; i++){
        let row = `<tr>
                            <td>${wpmArray[i]}</td>
					        <td>${accuArray[i]}</td>
						    <td>${dateArray[i]}</td>
					      </tr>`
        table.innerHTML += row
		}
    return table
}