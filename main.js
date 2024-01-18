const board = document.createElement("table")
board.setAttribute("id", "board")

for (row=1; row <= 8; row++) {
    const tablerow = document.createElement("tr")
    for (cell=1;  cell<= 8; cell++) {
        const square = document.createElement("td")
        square.setAttribute("class", "square")
        if (row % 2 == cell % 2) {
            square.setAttribute("class", "dark-square")
        } else {
            square.setAttribute("class", "light-square")
        }
        tablerow.appendChild(square) 
    }
    board.appendChild(tablerow)
}

document.getElementById("root").appendChild(board)