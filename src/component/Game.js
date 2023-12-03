import { useState } from "react";
import Board from "./Board";
import History from "./History";

export default function Game() {
    const [move, setMove] = useState(0)
    const player = move % 2 == 0 ? 'X' : 'O'
    const [winner, setWinner] = useState(null)
    const [history, setHistory] = useState([[
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ]])
    
    const grid = history[move]
    
    const isWin = (grid) => {
        console.log('for: ' + player)
        const lines = [
            [[0 ,0], [0, 1], [0, 2]], // -
            [[1 ,0], [1, 1], [1, 2]],
            [[2 ,0], [2, 1], [2, 2]],
            [[0, 0], [1, 0], [2, 0]], // |
            [[0, 1], [1, 1], [2, 1]],
            [[0, 2], [1, 2], [2, 2]],
            [[0, 0], [1, 1], [2, 2]], // \
            [[0, 2], [1, 1], [2, 0]]
        ]
        for (const line of lines) {
            let winnerXReq = 3
            let winnerOReq = 3
            for (const position of line) {
                if (grid[position[0]][position[1]] == 'X') {
                    winnerXReq--;
                }
                if (grid[position[0]][position[1]] == 'O') {
                    winnerOReq--;
                }
            }
            if (winnerXReq==0) {
                setWinner('X')
                return
            }
            if (winnerOReq==0) {
                setWinner('O')
                return
            }
        }
    }
    
    const handleClick = (i, j) => {
        if (grid[i][j] == "" && winner == null) {
            const newGrid = deepCopy(grid)
            newGrid[i][j] = player
            const newHistory = [...deepCopy(history.slice(0, move+1)), newGrid]
            setHistory(newHistory)
            setMove(newHistory.length-1)
            isWin(newGrid)            
        }
    }
    
    function handleHistory(index) {
        setWinner(null)
        setMove(index)
        isWin(history[index])
    }
    
    
    return <div className="game">
    <Board 
    player={player} 
    winner={winner}
    grid={grid} 
    handleClick={handleClick}
    />
    <History 
    history={history}
    handleClick={handleHistory}
    />
    </div>
}


function deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj))
}