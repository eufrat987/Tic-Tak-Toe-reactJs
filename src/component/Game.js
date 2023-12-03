import { useState } from "react";
import Board from "./Board";
import History from "./History";

export default function Game() {
    const [move, setMove] = useState(0)
    const [player, setPlayer] = useState("X")
    const [winner, setWinner] = useState(null)
    const [history, setHistory] = useState([[
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ]])
    
    const grid = history[move]
    console.log(history.map(h => h.toString()), move)
    
    
    const isWin = () => {
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
            let winnerReq = 3
            for (const position of line) {
                if (grid[position[0]][position[1]] == player) {
                    winnerReq--;
                }
            }
            if (winnerReq==0) {
                setWinner(player)
                return
            }
        }
    }
    
    const handleClick = (i, j) => {
        if (grid[i][j] == "" && winner == null) {
            const newGrid = deepCopy(grid)
            newGrid[i][j] = player
            const newHistory = [...deepCopy(history), newGrid]
            setHistory(newHistory)
            setMove(newHistory.length-1)
            isWin()
            setPlayer(p => (p=='X') ? 'O' : 'X')
        }
    }
    
    function handleHistory(index) {
        setMove(index)
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