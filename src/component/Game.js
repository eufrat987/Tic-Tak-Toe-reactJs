import { useState } from "react";
import Board from "./Board";

export default function Game() {
    const [player, setPlayer] = useState("X")
    const [winner, setWinner] = useState(null)
    const [history, setHistory] = useState([[
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ]])
    const grid = history[history.length-1]
    

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
            }
        }
    }
    
    const handleClick = (i, j) => {
        if (grid[i][j] == "" && winner == null) {
            const newGrid = grid.slice()
            newGrid[i][j] = player
            const newHistory = history.slice()
            newHistory.push(newGrid)
            setHistory(newHistory)
            isWin()
            if (winner == null) {
                setPlayer(p => p=='X' ? 'O' : 'X')
            }
        }
    }


    return <Board 
    player={player} 
    winner={winner}
    grid={grid} 
    handleClick={handleClick}
    />
}
